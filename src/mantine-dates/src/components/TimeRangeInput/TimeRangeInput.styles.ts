import {
  createMemoStyles,
  MantineTheme,
  INPUT_SIZES,
  MantineSize,
  getSizeValue,
} from '@mantine/core';

import { inputSizes } from '../TimeInput/TimeInput.styles';

interface TimeRangeInputStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  inputWrapper: ({ size }: TimeRangeInputStyles) => ({
    display: 'inline-flex',
    alignItems: 'center',
    // -2 for border offset
    height: getSizeValue({ size, sizes: INPUT_SIZES }) - 2,
  }),

  timeField: ({ theme, size }: TimeRangeInputStyles) => ({
    width: getSizeValue({ size, sizes: inputSizes }),
    appearance: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: 0,
    textAlign: 'center',
    border: '1px solid transparent',
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: 1,
    outline: 0,

    '&[disabled]': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      cursor: 'not-allowed',
    },
  }),

  separator: ({ theme, size }: TimeRangeInputStyles) => ({
    paddingLeft: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingRight: getSizeValue({ size, sizes: theme.spacing }) / 2,
    lineHeight: 1,
    marginBottom: 3,
  }),
});
