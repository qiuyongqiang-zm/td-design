import React, { forwardRef } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { Box, Pressable, SvgIcon, Text, Theme, useTheme } from '@td-design/react-native';

import { DatePickerPropsBase } from '../components/DatePicker/type';
import { ModalPickerProps } from '../picker/type';
import { PickerRef } from '../type';
import useDatePicker from '../useDatePicker';

interface PickerItemProps extends DatePickerPropsBase, Omit<ModalPickerProps, 'visible' | 'displayType'> {
  placeholder?: string;
  /** 是否允许清除 */
  allowClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  inForm?: boolean;
}

const DatePickerItem = forwardRef<PickerRef, PickerItemProps>(
  (
    {
      placeholder = '请选择',
      format = 'YYYY-MM-DD',
      value,
      onChange,
      style,
      allowClear = true,
      disabled = false,
      activeOpacity = 0.6,
      inForm,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme<Theme>();
    const { currentText, handlePress, handleInputClear } = useDatePicker({
      value,
      format,
      onChange,
      placeholder,
      ref,
      ...restProps,
    });

    const styles = StyleSheet.create({
      content: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        paddingHorizontal: theme.spacing[inForm ? 'x0' : 'x1'],
      },
      icon: { alignItems: 'flex-end' },
    });

    const Content = (
      <>
        <Text variant="p1" color={disabled ? 'disabled' : currentText === placeholder ? 'gray300' : 'text'}>
          {currentText}
        </Text>
        {!disabled && allowClear && !!currentText && currentText !== placeholder && (
          <Pressable activeOpacity={1} onPress={handleInputClear} hitOffset={10} style={styles.icon}>
            <SvgIcon name="closecircleo" color={theme.colors.icon} />
          </Pressable>
        )}
      </>
    );

    if (!disabled)
      return (
        <>
          <Pressable onPress={handlePress} activeOpacity={activeOpacity} style={[styles.content, style]}>
            {Content}
          </Pressable>
        </>
      );
    return <Box style={[styles.content, style]}>{Content}</Box>;
  }
);

export default DatePickerItem;
