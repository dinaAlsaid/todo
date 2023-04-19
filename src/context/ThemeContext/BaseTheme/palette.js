export const palette = (mode) => ({
  mode,
  ...(mode === "dark" && {}),
  ...(mode === "light" && {
    background: {
      paper: "#fbfbfb",
      
    },
  }),
});
