import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  getThemeColor,
  getSizeValue,
  MantineColor,
} from '../../theme';

export const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
};

interface ProgressStyles {
  theme: MantineTheme;
  color: MantineColor;
  radius: MantineNumberSize;
  reduceMotion: boolean;
  size: MantineNumberSize;
  striped: boolean;
}

export default createMemoStyles({
  root: ({ radius, size, theme }: ProgressStyles) => ({
    position: 'relative',
    height: getSizeValue({ size, sizes }),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    overflow: 'hidden',
  }),

  bar: ({ theme, color, radius, reduceMotion, striped }: ProgressStyles) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    transition: reduceMotion ? 'none' : `width 200ms ${theme.transitionTimingFunction}`,
    backgroundSize: [theme.spacing.md, theme.spacing.md],
    backgroundImage: striped
      ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
      : 'none',

    '&:last-child': {
      borderTopRightRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      borderBottomRightRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    },

    '&:first-child': {
      borderTopLeftRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      borderBottomLeftRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    },
  }),
});
