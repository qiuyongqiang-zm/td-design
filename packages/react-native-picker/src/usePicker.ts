import { ForwardedRef, useEffect, useImperativeHandle } from 'react';
import { Keyboard } from 'react-native';

import { useBoolean, useMemoizedFn, useSafeState } from '@td-design/rn-hooks';

import { CascadePickerItemProps, ItemValue } from './components/WheelPicker/type';
import { PickerProps } from './picker/type';
import { PickerRef } from './type';
import { transformValueToLabel } from './utils';

function getText(
  data: CascadePickerItemProps[] | CascadePickerItemProps[][],
  value?: ItemValue[],
  cascade?: boolean,
  placeholder?: string,
  hyphen?: string
) {
  if (value) {
    return transformValueToLabel(data, value, cascade, hyphen) || placeholder;
  }
  return placeholder;
}

export default function usePicker({
  data,
  cascade = false,
  value,
  onChange,
  placeholder = '请选择',
  hyphen,
  ref,
}: Pick<PickerProps, 'value' | 'onChange' | 'data' | 'cascade'> & {
  placeholder?: string;
  hyphen?: string;
  ref: ForwardedRef<PickerRef>;
}) {
  const [state, setState] = useSafeState<ItemValue[] | undefined>(value);
  const [currentText, setCurrentText] = useSafeState(getText(data, value, cascade, placeholder, hyphen));
  const [visible, { setTrue, setFalse }] = useBoolean(false);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        setTrue();
      },
    };
  });

  useEffect(() => {
    const text = getText(data, value, cascade, placeholder, hyphen);
    setCurrentText(text);
    setState(value);
  }, [value]);

  const handlePress = () => {
    Keyboard.dismiss();
    setTrue();
  };

  const handleChange = (value?: ItemValue[]) => {
    const text = getText(data, value, cascade, placeholder, hyphen);
    setCurrentText(text);
    setState(value);

    onChange?.(value);
  };

  const handleInputClear = () => {
    setCurrentText(placeholder);
    setState(undefined);
    onChange?.(undefined);
  };

  return {
    state,
    currentText,
    visible,
    setFalse,
    handlePress: useMemoizedFn(handlePress),
    handleChange: useMemoizedFn(handleChange),
    handleInputClear: useMemoizedFn(handleInputClear),
  };
}
