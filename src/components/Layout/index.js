import React from "react";
import { Container } from "@mui/material";
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
