import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { components } from "./components";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
// import { shadows } from "./shadows";

const initTheme = (mode, userOptions) => {
  console.log(userOptions);
  let themeVariables = createTheme({
    palette: palette(mode),
    typography,
    breakpoints,
    // shadows,
  });
  if (userOptions) {
    localStorage.setItem("journalTheme", JSON.stringify(userOptions));
    themeVariables = createTheme(themeVariables, userOptions);
  }
  return createTheme(themeVariables, { components: components(themeVariables) });
};

export const getTheme = (mode, userOptions) => {
  let BaseTheme = initTheme(mode, userOptions);
  if (localStorage.getItem("journalTheme")) {
    let userTheme = JSON.parse(localStorage.getItem("journalTheme"));
    return createTheme(BaseTheme, userTheme);
  } else {
    return BaseTheme;
  }
};
