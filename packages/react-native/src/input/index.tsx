import React, { forwardRef, ReactNode } from 'react';
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';

import { useTheme } from '@shopify/restyle';

import Box from '../box';
import Flex from '../flex';
import helpers from '../helpers';
import Label from '../label';
import Pressable from '../pressable';
import SvgIcon from '../svg-icon';
import { Theme } from '../theme';
import useInput from './useInput';

const { ONE_PIXEL, px } = helpers;
export interface InputProps extends Omit<TextInputProps, 'placeholderTextColor' | 'onChange' | 'onChangeText'> {
  /** 标签 */
  label?: ReactNode;
  /** 标签位置。可选值：左侧/上方 */
  labelPosition?: 'left' | 'top';
  /** 输入类型。文本输入或者密码输入 */
  inputType?: 'input' | 'password';
  /** 输入框自定义样式 */
  inputStyle?: StyleProp<TextStyle>;
  /** 左侧图标 */
  left?: ReactNode;
  /** 右侧内容 */
  right?: ReactNode;
  /** 是否显示清除图标 */
  allowClear?: boolean;
  /** 值 */
  value?: string;
  /** 输入改变事件 */
  onChange?: (value: string) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示冒号 */
  colon?: boolean;
  /** 清除内容 */
  onClear?: () => void;
  /** 是否必填项 */
  required?: boolean;
  /** 作为FormItem子组件时注入进来的高度 */
  itemHeight?: number;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      labelPosition = 'left',
      left,
      right,
      inputType = 'input',
      inputStyle,
      disabled = false,
      allowClear = true,
      value,
      onChange,
      onClear,
      colon = false,
      required = false,
      style,
      defaultValue,
      itemHeight,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme<Theme>();
    const { inputValue, eyeOpen, handleChange, handleInputClear, triggerPasswordType } = useInput({
      inputType,
      value,
      defaultValue,
      onChange,
      onClear,
    });

    const styles = StyleSheet.create({
      input: {
        paddingHorizontal: theme.spacing.x1,
        paddingVertical: theme.spacing.x2,
        fontSize: px(14),
        color: theme.colors.text,
        includeFontPadding: false,
        textAlignVertical: 'center',
      },
    });

    const InputContent = (
      <Flex
        borderWidth={ONE_PIXEL}
        borderColor="border"
        borderRadius="x1"
        position="relative"
        paddingHorizontal={'x1'}
        flex={1}
        style={style}
      >
        {left}
        <Box flexGrow={1}>
          <TextInput
            ref={ref}
            textAlignVertical="center"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            style={[itemHeight ? { height: itemHeight } : {}, styles.input, inputStyle]}
            editable={!disabled}
            placeholderTextColor={theme.colors.gray300}
            selectionColor={theme.colors.primary200}
            value={inputValue}
            onChangeText={handleChange}
            secureTextEntry={eyeOpen}
            multiline={false}
            underlineColorAndroid="transparent"
            {...restProps}
          />
        </Box>
        {inputType === 'password' && (
          <Pressable activeOpacity={1} onPress={triggerPasswordType} hitOffset={10}>
            <SvgIcon name={eyeOpen ? 'eyeclose' : 'eyeopen'} color={theme.colors.icon} />
          </Pressable>
        )}
        {allowClear && !disabled && !!inputValue && (
          <Pressable activeOpacity={1} onPress={handleInputClear} hitOffset={10}>
            <SvgIcon name="closecircleo" color={theme.colors.icon} />
          </Pressable>
        )}
        {right}
      </Flex>
    );

    return labelPosition === 'left' ? (
      <Box>
        <Flex alignItems="center">
          <Label {...{ colon, label, required }} />
          {InputContent}
        </Flex>
      </Box>
    ) : (
      <Box>
        <Label {...{ colon, label, required }} />
        {InputContent}
      </Box>
    );
  }
);
Input.displayName = 'Input';

export default Input;
export { default as InputItem } from './InputItem';
export { default as TextArea } from './TextArea';
