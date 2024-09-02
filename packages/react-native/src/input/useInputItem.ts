import { useEffect } from 'react';

import { useMemoizedFn, useSafeState } from '@td-design/rn-hooks';

import type { InputItemProps } from './InputItem';

export default function useInputItem({
  inputType,
  value,
  defaultValue,
  onChange,
  onClear,
}: Pick<InputItemProps, 'inputType' | 'value' | 'defaultValue' | 'onChange' | 'onClear'>) {
  const [inputValue, setInputValue] = useSafeState<string>();
  const [eyeOpen, setEyeOpen] = useSafeState(inputType === 'password');

  useEffect(() => {
    setInputValue(value ?? defaultValue ?? '');
  }, [value, defaultValue]);

  const handleChange = (val: string) => {
    setInputValue(val);
    onChange?.(val);
  };

  const handleInputClear = () => {
    handleChange('');
    onClear?.();
  };

  const triggerPasswordType = () => {
    setEyeOpen(!eyeOpen);
  };

  return {
    inputValue,
    eyeOpen,
    handleChange: useMemoizedFn(handleChange),
    handleInputClear: useMemoizedFn(handleInputClear),
    triggerPasswordType: useMemoizedFn(triggerPasswordType),
  };
}
