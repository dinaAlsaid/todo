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

  const changecolor = (key, color) => {
    setUserOptions(
      deepmerge({...userOptions}, {
        palette: {
          [key]: {
            main: color,
          },
        },
      })
    );
  };
  // const changeTheme = (userOptions) => {
  //   localStorage.setItem("journalTheme", JSON.stringify(userOptions));
  //   setCurrentTheme(createTheme(currentTheme,userOptions));
  // };

  const state = {
    // changeTheme,
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
