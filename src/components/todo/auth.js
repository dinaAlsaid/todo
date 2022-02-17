import React from 'react';
import { LoginContext } from './context';
import { If } from 'react-if';


function Auth(props) {
  const context = LoginContext;
  let okToRender = false;

  try {
    okToRender =
      context.loggedIn &&
      (props.capability
        ? context.user.capabilities.includes(props.capability)
        : true);
  } catch (e) {
    console.warn('Not Authorized');
  }

  return (
    <If condition={okToRender}>
      <div>{props.children}</div>
    </If>
  );
}

export default Auth;
