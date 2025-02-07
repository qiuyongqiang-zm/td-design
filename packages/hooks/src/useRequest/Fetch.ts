import { MutableRefObject } from 'react';

export default class Fetch<TData, TParams extends any[]> {
  public pluginImpls: PluginReturn<TData, TParams>[] = [];

  count = 0;

  state: FetchState<TData, TParams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  };

  constructor(
    public service: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams>,
    public subscribe: Subscribe,
    public initState: Partial<FetchState<TData, TParams>> = {}
  ) {
    this.service = service;
    this.options = options;
    this.subscribe = subscribe;

    this.state = {
      ...this.state,
      loading: !options.manual,
      ...initState,
    };
  }

  setState(s: Partial<FetchState<TData, TParams>> = {}) {
    this.state = {
      ...this.state,
      ...s,
    };
    this.subscribe();
  }

  runPluginHandler(event: keyof PluginReturn<TData, TParams>, ...rest: any[]) {
    // @ts-ignore
    const result = this.pluginImpls.map(impl => impl[event]?.(...rest)).filter(Boolean);
    return Object.assign({}, ...result);
  }

  async runAsync(...params: any[]): Promise<TData> {
    this.count += 1;
    const currentCount = this.count;

    const { stopNow = false, returnNow = false, ...state } = this.runPluginHandler('onBefore', params);

    if (stopNow) {
      return new Promise(() => {});
    }

    this.setState({
      loading: true,
      params,
      ...state,
    });

    if (returnNow) {
      return Promise.resolve(state.data);
    }

    this.options.onBefore?.(params as TParams);

    try {
      let { servicePromise } = this.runPluginHandler('onRequest', this.service.current, params);
      if (!servicePromise) {
        servicePromise = this.service.current(...(params as TParams));
      }

      const result = await servicePromise;

      if (currentCount !== this.count) {
        return new Promise(() => {});
      }

      this.setState({
        loading: false,
        data: result,
        error: undefined,
      });

      this.options.onSuccess?.(result, params as TParams);
      this.runPluginHandler('onSuccess', result, params);

      this.options.onFinally?.(params as TParams, result, undefined);
      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, result, undefined);
      }

      return result;
    } catch (e) {
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }

      const error = e as Error;
      this.setState({
        loading: false,
        error,
      });

      this.options.onError?.(error, params as TParams);
      this.runPluginHandler('onError', error, params);

      this.options.onFinally?.(params as TParams, undefined, error);
      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, undefined, error);
      }

      throw error;
    }
  }

  run(...params: any[]) {
    this.runAsync(...params).catch(() => {
      if (!this.options.onError) {
        // console.error(error);
      }
    });
  }

  cancel() {
    this.count += 1;
    this.setState({
      loading: false,
    });

    this.runPluginHandler('onCancel');
  }

  refresh() {
    this.run(...(this.state.params ?? ([] as unknown as TParams)));
  }

  refreshAsync() {
    return this.runAsync(...(this.state.params ?? ([] as unknown as TParams)));
  }

  mutate(data?: TData | ((oldData?: TData) => TData | undefined)) {
    let targetData: TData | undefined;
    if (typeof data === 'function') {
      targetData = (data as (oldData: TData) => TData | undefined)(this.state.data as TData);
    } else {
      targetData = data;
    }

    this.setState({
      data: targetData,
    });

    this.runPluginHandler('onMutate', targetData);
  }
}
