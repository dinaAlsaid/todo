import React from "react";
import "./styles.scss";

export const HandwrittenItem = (props) => {
  return <div 
  {...props}
  className={`listItem todo text ${props.className}`}
  >
    {props.children}
  </div>;
};
