import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { palette } from "./palette";
import { components } from "./components";
// import { shadows } from "./shadows";

export const initTheme = () => {
  let BaseTheme = createTheme({
    palette,
    components,
    // shadows,
  });

  if (localStorage.getItem("journalTheme")) {
    let userTheme = JSON.parse(localStorage.getItem("journalTheme"));
    return createTheme(deepmerge(BaseTheme, userTheme));
  } else {
    return BaseTheme;
  }
};
