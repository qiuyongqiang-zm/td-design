import React, { FC, useEffect, useMemo, useState } from 'react';
import { requireNativeComponent, HostComponent } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme, helpers } from '@td-design/react-native';
import { ItemValue, RNWheelPickerProps, WheelPickerProps } from '../../type';

const { px } = helpers;
const RNWheelPicker: HostComponent<
  Omit<RNWheelPickerProps, 'onChange'> & {
    onValueChange: (e: { nativeEvent: { data: ItemValue } }) => void;
  }
> = requireNativeComponent('RNWheelPicker');

const WheelPickerAndroid: FC<WheelPickerProps> = props => {
  const theme = useTheme<Theme>();
  const [selectedIndex, selectIndex] = useState<number>(0);

  const {
    data = [],
    value,
    onChange,
    indicatorColor = theme.colors.border,
    textColor = theme.colors.gray300,
    selectTextColor = theme.colors.gray500,
    textSize = px(18),
    ...restProps
  } = props;

  useEffect(() => {
    const index = data.findIndex(ele => ele.value + '' === value + '');
    selectIndex(index === -1 ? 0 : index);
  }, [data, value]);

  const pickerData = useMemo(() => {
    return data.map(item => ({
      ...item,
      value: item.value + '',
    }));
  }, [data]);

  const handleChange = (e: { nativeEvent: { data: ItemValue } }) => {
    onChange?.(e.nativeEvent.data);
  };

  return (
    <RNWheelPicker
      onValueChange={handleChange}
      data={pickerData}
      {...restProps}
      {...{ selectedIndex, indicatorColor, textColor, selectTextColor, textSize }}
    />
  );
};

export default WheelPickerAndroid;
