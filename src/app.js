import React from "react";
import { Routes, Route } from "react-router";

import SettingsProvider from "context/settings.js";
import ThemeProvider from "context/ThemeContext";

import Layout from "components/Layout";

import "app.scss";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      {/* <Helmet>
        <link
          rel="preload"
          href="./assets/fonts/Reenie_Beanie/ReenieBeanie-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Helmet> */}

      <SettingsProvider>
        <ThemeProvider>
          <CssBaseline/>
          <Routes>
            <Route path="/" element={<Layout />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
};
export default App;
