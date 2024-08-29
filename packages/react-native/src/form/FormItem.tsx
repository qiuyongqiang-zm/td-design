import React, { FC, useContext, useMemo, useRef } from 'react';

import { useMemoizedFn, useSafeState } from '@td-design/rn-hooks';
import { Field, FieldContext } from 'rc-field-form';
import { Meta } from 'rc-field-form/es/interface';

import Box from '../box';
import helpers from '../helpers';
import Text from '../text';
import { FormContext } from './context';
import { FormItemProps } from './type';

const { ONE_PIXEL } = helpers;

const FormItem: FC<FormItemProps> = ({ children, noStyle = false, name, ...fieldProps }) => {
  const ref = useRef<{ focus: () => void }>(null);
  const fieldContext = useContext(FieldContext);
  const [errors, setErrors] = useSafeState<string[]>([]);

  const { formItemHeight, bordered } = useContext(FormContext);

  const onMetaChange = useMemoizedFn(
    (
      meta: Meta & {
        destroy?: boolean;
      }
    ) => {
      setErrors(meta.errors);
      const errors = fieldContext.getFieldsError() || [];
      const fieldErrors = errors.filter(item => item.errors.length > 0);
      if (fieldErrors.length > 0 && name === fieldErrors[0]?.name?.[0]) {
        ref.current?.focus();
      }
    }
  );

  const Content = useMemo(
    () => (
      <Field name={name} {...fieldProps} onMetaChange={onMetaChange}>
        {React.cloneElement(children, {
          ref,
          brief:
            errors.length > 0 ? (
              <Text variant="p3" color="func600">
                {errors[0]}
              </Text>
            ) : null,
          itemHeight: formItemHeight,
        })}
      </Field>
    ),
    [name, fieldProps, formItemHeight, errors]
  );

  if (noStyle) return Content;

  return (
    <>
      <Box paddingHorizontal={'x2'} minHeight={formItemHeight} justifyContent={'center'}>
        {Content}
      </Box>
      <Box
        width={'100%'}
        height={bordered ? ONE_PIXEL : 0}
        backgroundColor={errors.length > 0 ? 'func600' : 'border'}
      />
    </>
  );
};
FormItem.displayName = 'FormItem';

export default FormItem;
