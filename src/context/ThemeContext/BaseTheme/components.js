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
  PaperSize: {
    portrait: {
      A0: { height: "118.9cm", width: "84.1cm" },
      A1: { height: "84.1cm", width: "59.4cm" },
      A2: { height: "59.4cm", width: "42cm" },
      A3: { height: "42cm", width: "29.7cm" },
      A4: { height: "29.7cm", width: "21cm" },
      A5: { height: "21cm", width: "14.85cm" },
      A6: { height: "14.85cm", width: "10.5cm" },
      A7: { height: "10.5cm", width: "7.4cm" },
      A8: { height: "7.4cm", width: "5.2cm" },
      A9: { height: "5.2cm", width: "3.7cm" },
      A10: { height: "3.7cm", width: "2.6cm" },
    },
    landscape: {
      A0: { width: "118.9cm", height: "84.1cm" },
      A1: { width: "84.1cm", height: "59.4cm" },
      A2: { width: "59.4cm", height: "42cm" },
      A3: { width: "42cm", height: "29.7cm" },
      A4: { width: "29.7cm", height: "21cm" },
      A5: { width: "21cm", height: "14.85cm" },
      A6: { width: "14.85cm", height: "10.5cm" },
      A7: { width: "10.5cm", height: "7.4cm" },
      A8: { width: "7.4cm", height: "5.2cm" },
      A9: { width: "5.2cm", height: "3.7cm" },
      A10: { width: "3.7cm", height: "2.6cm" },
    },
  },
});
