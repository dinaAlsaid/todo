import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Login from "./login";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>TODO list</Navbar.Brand>
      <Login />
    </Navbar>
  );
};

export default Header;
