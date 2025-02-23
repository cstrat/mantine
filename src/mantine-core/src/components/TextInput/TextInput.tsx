import React from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineSize } from '../../theme';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import {
  InputWrapperBaseProps,
  InputWrapper,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';

export type TextInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface TextInputProps
  extends DefaultProps<TextInputStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Input element type */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Input size */
  size?: MantineSize;

  /** Static css selector base */
  __staticSelector?: string;
}

export function TextInput({
  className,
  id,
  label,
  error,
  required,
  type = 'text',
  style,
  icon,
  description,
  themeOverride,
  wrapperProps,
  elementRef,
  size = 'sm',
  classNames,
  styles,
  __staticSelector = 'text-input',
  ...others
}: TextInputProps) {
  const uuid = useId(id);

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
      size={size}
      className={className}
      style={style}
      themeOverride={themeOverride}
      classNames={classNames}
      styles={styles}
      __staticSelector={__staticSelector}
      {...wrapperProps}
    >
      <Input<'input', HTMLInputElement>
        {...others}
        required={required}
        elementRef={elementRef}
        id={uuid}
        type={type}
        invalid={!!error}
        icon={icon}
        size={size}
        themeOverride={themeOverride}
        classNames={classNames}
        styles={styles}
        __staticSelector={__staticSelector}
      />
    </InputWrapper>
  );
}

TextInput.displayName = '@mantine/core/TextInput';
