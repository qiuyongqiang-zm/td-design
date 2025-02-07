import { useRef } from 'react';
import Fetch from '../Fetch';

export function useRetryPlugin<TData, TParams extends any[]>(
  fetchInstance: Fetch<TData, TParams>,
  { retryInterval, retryCount }: { retryInterval?: number; retryCount?: number }
) {
  const timerRef = useRef<NodeJS.Timeout>();
  const countRef = useRef(0);

  const triggerByRetry = useRef(false);

  if (!retryCount) return {};

  return {
    onBefore: () => {
      if (!triggerByRetry.current) {
        countRef.current = 0;
      }
      triggerByRetry.current = false;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    onSuccess: () => {
      countRef.current = 0;
    },
    onError: () => {
      countRef.current += 1;
      if (retryCount === -1 || countRef.current <= retryCount) {
        const timeout = retryInterval ?? Math.min(1000 * 2 ** countRef.current, 30000);
        timerRef.current = setTimeout(() => {
          triggerByRetry.current = true;
          fetchInstance.refresh();
        }, timeout);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: () => {
      countRef.current = 0;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
  };
}
