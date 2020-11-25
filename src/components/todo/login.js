import React,{setState} from 'react';
import { LoginContext } from '../../context/login.js';
import { If } from 'react-if';

// const If = props => {
//   return props.condition ? props.children : null;
// };

function Login(props) {
  const context = LoginContext;

  const state = { username: '', password: '' };

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.login(state.username, state.password);
  };

  return (
    <>
      <If condition={context.loggedIn}>
        <button onClick={context.logout}>Log Out</button>
      </If>

      <If condition={!context.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </If>
    </>
  );
}

export default Login;
