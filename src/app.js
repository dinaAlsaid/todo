import React from "react";
import LoginProvider from "./context/login.js";
import SettingsProvider from "./context/settings.js";
import Layout from "./components/todo/Layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

export default function App() {
  return (
      <LoginProvider>
        <SettingsProvider>
            <Layout />
        </SettingsProvider>
      </LoginProvider>
  );
}
