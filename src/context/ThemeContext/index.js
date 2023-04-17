import { useState, createContext, useMemo } from "react";
import { getTheme } from "context/ThemeContext/BaseTheme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [mode, setMode] = useState("light");
  const [userOptions, setUserOptions] = useState(null);
  const currentTheme = useMemo(() => getTheme(mode, userOptions), [mode, userOptions]);

  const toggleMode = () => {
    if (currentTheme.palette.mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  const changecolor = (data, theme) => {
    let palette = Object.keys(data).reduce((a, itemKey) => {
      if (data[itemKey]) {
        return { ...a, [itemKey]: { main: data[itemKey] } };
      } else {
        return { ...a, [itemKey]: { main: theme.palette[itemKey].main } };
      }
    }, {});

    setUserOptions(
      deepmerge(
        { ...userOptions },
        {
          palette,
        }
      )
    );
  };


  const state = {
    toggleMode,
    changecolor,
  };

  return (
    <ThemeContext.Provider value={state}>
      <MuiThemeProvider theme={currentTheme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
