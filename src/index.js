import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/fonts/Reenie_Beanie/ReenieBeanie-Regular.woff2"
import App from "./app.js";

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
