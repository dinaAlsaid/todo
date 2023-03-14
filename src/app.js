import React from "react";
import { Routes, Route } from "react-router";

import SettingsProvider from "context/settings.js";
import Layout from "components/Layout";

import "app.scss";
import { ThemeProvider } from "@mui/material";
import { initTheme } from "Theme";

export default function App() {
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
        <ThemeProvider theme={initTheme()}>
          <Routes>
            <Route path="/" element={<Layout />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
}
