import React from "react";
import { Routes, Route } from "react-router";
import { Helmet } from "react-helmet";

import LoginProvider from "./context/login.js";
import SettingsProvider from "./context/settings.js";
import Layout from "./components/todo/Layout.js";
import Login from "./views/login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

export default function App() {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          href="./assets/fonts/Reenie_Beanie/ReenieBeanie-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
      </Helmet>

      <LoginProvider>
        <SettingsProvider>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </SettingsProvider>
      </LoginProvider>
    </>
  );
}
