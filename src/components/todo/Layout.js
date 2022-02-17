import React from "react";
import ToDo from "./todo-connected.js";
import Header from "./Header";
import Settings from "./settings.js";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Header />
      <Settings />

      <Container>
        <ToDo />
      </Container>
    </>
  );
};

export default Layout;
