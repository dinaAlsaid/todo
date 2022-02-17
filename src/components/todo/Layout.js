import React from "react";
import ToDo from "../../views/todo-connected";
import Header from "./Header";
import Settings from "./settings.js";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Settings />
      <ToDo />
    </>
  );
};

export default Layout;
