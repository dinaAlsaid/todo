import { useState, createContext } from "react";
import { initTheme } from "context/ThemeContext/BaseTheme";
import { deepmerge } from "@mui/utils";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState(initTheme());

  const changeTheme = (userOptions) => {
    let newTheme = deepmerge(currentTheme, userOptions);
    localStorage.setItem("journalTheme", JSON.stringify(userOptions));
    setCurrentTheme(createTheme(newTheme));
  };

  const state = {
    changeTheme
  };

  return (
    <ThemeContext.Provider value={state}>
      <MuiThemeProvider theme={currentTheme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
