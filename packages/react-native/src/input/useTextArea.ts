import { useSafeState } from '@td-design/rn-hooks';

import type { TextAreaProps } from './TextArea';

export default function useTextArea({ value, onChange }: Pick<TextAreaProps, 'value' | 'onChange'>) {
  const [inputValue, setInputValue] = useSafeState(value);

  const handleChange = (val: string) => {
    setInputValue(val);
    onChange?.(val);
  };

  return {
    inputValue,
    handleChange,
  };
}
