import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  MantineSize,
  getSizeValue,
  getFontStyles,
  getThemeColor,
  getSharedColorScheme,
  MantineColor,
} from '../../../theme';

export const sizes = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40,
};

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

const padding = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

const checkedPadding = {
  xs: 7.5,
  sm: 10,
  md: 11.5,
  lg: 13,
  xl: 15,
};

interface ChipStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  size: MantineSize;
  color: MantineColor;
}

export default createMemoStyles({
  label: ({ theme, radius, size }: ChipStyles) => ({
    ...getFontStyles(theme),
    boxSizing: 'border-box',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    display: 'inline-block',
    alignItems: 'center',
    userSelect: 'none',
    border: '1px solid transparent',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    height: getSizeValue({ size, sizes }),
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: `${getSizeValue({ size, sizes }) - 2}px`,
    paddingLeft: getSizeValue({ size, sizes: padding }),
    paddingRight: getSizeValue({ size, sizes: padding }),
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 100ms ease',
    WebkitTapHighlightColor: 'transparent',
  }),

  outline: ({ theme }: ChipStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  }),

  filled: ({ theme }: ChipStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  }),

  disabled: ({ theme }: ChipStyles) => ({
    backgroundColor: [
      [theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]],
      '!important',
    ],
    borderColor: [
      [theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]],
      '!important',
    ],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '& $iconWrapper': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  }),

  checked: ({ theme, color, size }: ChipStyles) => ({
    paddingLeft: getSizeValue({ size, sizes: checkedPadding }),
    paddingRight: getSizeValue({ size, sizes: checkedPadding }),

    '&$outline': {
      borderColor: getThemeColor({ theme, color, shade: 6 }),
    },

    '&$filled': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? getSharedColorScheme({ color, theme, variant: 'light' }).background
          : getThemeColor({ theme, color, shade: 1 }),
    },
  }),

  checkIcon: ({ size }: ChipStyles) => ({
    width: getSizeValue({ size, sizes: iconSizes }),
    height: getSizeValue({ size, sizes: iconSizes }) / 1.1,
    display: 'block',
  }),

  iconWrapper: ({ theme, color, size }: ChipStyles) => ({
    color: getThemeColor({ theme, color, shade: 6 }),
    width:
      getSizeValue({ size, sizes: iconSizes }) + getSizeValue({ size, sizes: theme.spacing }) / 1.5,
    maxWidth:
      getSizeValue({ size, sizes: iconSizes }) + getSizeValue({ size, sizes: theme.spacing }) / 1.5,
    height: getSizeValue({ size, sizes: iconSizes }),
    display: 'inline-block',
    verticalAlign: 'middle',
    overflow: 'hidden',
  }),

  input: ({ theme }: ChipStyles) => ({
    width: 0,
    height: 0,
    padding: 0,
    opacity: 0,
    margin: 0,

    // input is hidden by default, these styles add focus to label when user navigates with keyboard
    '&:focus': {
      outline: 'none',

      '& + $label': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
        }, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
      },

      '&:focus:not(:focus-visible)': {
        '& + $label': {
          boxShadow: 'none',
        },
      },
    },
  }),
});
