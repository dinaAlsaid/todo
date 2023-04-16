export const components = (theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      root: {
        body: { backgroundColor: theme.palette.background.default },
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      square: true,
    },
    styleOverrides: {
      root: {
        backgroundImage: `linear-gradient(283deg, transparent, rgb(239, 239, 239))`,
        padding: `2em`,
        boxSizing: `border-box`,
      },
    },
  },
});
