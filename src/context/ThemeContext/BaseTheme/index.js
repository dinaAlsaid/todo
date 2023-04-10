import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { palette } from "./palette";
import { components } from "./components";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { shadows } from "./shadows";

export const initTheme = () => {
  let themeVariables = createTheme({
    palette,
    typography,
    breakpoints,
    shadows,
  });

  let BaseTheme = createTheme(deepmerge(themeVariables, { components: components(themeVariables) }));

  if (localStorage.getItem("journalTheme")) {
    let userTheme = JSON.parse(localStorage.getItem("journalTheme"));
    return createTheme(deepmerge(BaseTheme, userTheme));
  } else {
    return BaseTheme;
  }
};
