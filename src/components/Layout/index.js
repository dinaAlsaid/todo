import React from "react";
import { Container } from "react-bootstrap";
import ToDo from "views/todoList";

const Layout = () => {
  return (
    <>
      <Container>
        <ToDo />
      </Container>
    </>
  );
};

export default Layout;
