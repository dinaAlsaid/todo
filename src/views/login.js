import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { LoginContext } from "../context/login";

const Login = () => {
  const context = useContext(LoginContext);

  return <Button onClick={()=>{console.log(context.login())}}>login</Button>;
};

export default Login;
