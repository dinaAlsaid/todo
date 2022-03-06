import React from "react";
import LoginProvider from "./context/login.js";
import SettingsProvider from "./context/settings.js";
import Layout from "./components/todo/Layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import { Routes,Route } from "react-router";
import Login from "./views/login";

export default function App() {
  return (
      <LoginProvider>
        <SettingsProvider>
          <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
            
        </SettingsProvider>
      </LoginProvider>
  );
}
