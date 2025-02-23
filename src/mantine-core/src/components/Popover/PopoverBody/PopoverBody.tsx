import React from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  mergeStyles,
  MantineShadow,
} from '../../../theme';
import { Text } from '../../Text/Text';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import useStyles from './PopoverBody.styles';

export type PopoverBodyStylesNames = keyof ReturnType<typeof useStyles>;

interface PopoverBodyProps
  extends DefaultProps<PopoverBodyStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  shadow: MantineShadow;
  radius: MantineNumberSize;
  spacing: MantineNumberSize;
  elementRef: React.ForwardedRef<HTMLDivElement>;
  withCloseButton: boolean;
  titleId: string;
  bodyId: string;
  onClose(): void;
  closeButtonLabel: string;
}

export function PopoverBody({
  classNames,
  styles,
  themeOverride,
  shadow,
  spacing,
  radius,
  elementRef,
  withCloseButton,
  title,
  titleId,
  bodyId,
  onClose,
  closeButtonLabel,
  children,
  ...others
}: PopoverBodyProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, shadow, radius, spacing }, classNames, 'popover');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-labelledby={titleId}
      aria-describedby={bodyId}
      className={classes.wrapper}
      style={_styles.wrapper}
      ref={elementRef}
      {...others}
    >
      <div className={classes.popover} style={_styles.popover}>
        <div className={classes.body} style={_styles.body}>
          {!!title && (
            <div className={classes.header} style={_styles.header}>
              <Text size="sm" id={titleId} className={classes.title} style={_styles.title}>
                {title}
              </Text>
            </div>
          )}

          {withCloseButton && (
            <CloseButton
              themeOverride={themeOverride}
              size="sm"
              onClick={onClose}
              aria-label={closeButtonLabel}
              className={classes.close}
              style={_styles.close}
            />
          )}

          <div className={classes.inner} id={bodyId} style={_styles.inner}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

PopoverBody.displayName = '@mantine/core/PopoverBody';
