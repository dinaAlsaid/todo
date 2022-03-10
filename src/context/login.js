import React,{setState} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const API = process.env.REACT_APP_API || 'https://auth-server-401.herokuapp.com';

export const LoginContext = React.createContext();

function LoginProvider (props) {
  
  const login = (username, password) => {
    fetch(`${API}/signin`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
      }),
    })
    .then(response => response.text())
    .then(token => validateToken(token))
    .catch(console.error);
  }
  
  const validateToken = token => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      console.log('all good');
      setLoginState(true, token, user);
    }
    catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }
    
  };
  
  const logout = () => {
    setLoginState(false, null, {});
  };
  
  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setState({ token, loggedIn, user });
  };
  const state = {
    loggedIn: false,
    login: login,
    logout: logout,
    validateToken,
    user: {},
  };
  
  return (
    <LoginContext.Provider value={state}>
        {props.children}
      </LoginContext.Provider>
    );
}

export default LoginProvider;
