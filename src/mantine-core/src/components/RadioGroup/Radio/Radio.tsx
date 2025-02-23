import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import {
  DefaultProps,
  useMantineTheme,
  MantineSize,
  mergeStyles,
  MantineColor,
} from '../../../theme';
import useStyles from './Radio.styles';

export type RadioStylesNames = Exclude<keyof ReturnType<typeof useStyles>, 'labelDisabled'>;

export interface RadioProps
  extends DefaultProps<RadioStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  children: React.ReactNode;

  /** Radio value */
  value: string;

  /** Active radio color from theme.colors */
  color?: MantineColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Radio({
  className,
  style,
  themeOverride,
  id,
  children,
  size,
  elementRef,
  title,
  disabled,
  color,
  classNames,
  styles,
  ...others
}: RadioProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, size, theme }, classNames, 'radio-group');
  const _styles = mergeStyles(classes, styles);
  const uuid = useId(id);

  return (
    <div
      className={cx(classes.radioWrapper, className)}
      style={{ ...style, ..._styles.radioWrapper }}
      title={title}
    >
      <label
        className={cx(classes.label, { [classes.labelDisabled]: disabled })}
        htmlFor={uuid}
        style={_styles.label}
      >
        <input
          ref={elementRef}
          className={classes.radio}
          type="radio"
          id={uuid}
          disabled={disabled}
          style={_styles.radio}
          {...others}
        />
        <span>{children}</span>
      </label>
    </div>
  );
}

Radio.displayName = '@mantine/core/Radio';
