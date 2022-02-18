import React from "react";
import "./styles.scss";

export const HandwrittenItem = (props) => {
  return <div 
  {...props}
  className={`listItem todo ${props.className}`}
  >
    {props.children}
  </div>;
};
