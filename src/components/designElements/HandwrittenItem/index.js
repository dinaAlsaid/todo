import React from "react";
import "./styles.scss";

export const HandwrittenItem = ({ style, className, children }) => {
  const itemStyles = {
    fontFamily: "little sunshine",
    fontSize: "1.5rem",
    lineHeight: "initial",
    textTransform: "lowercase",
    letterSpacing: ".35rem",
    ...style,
  };
  return (
    <div style={itemStyles} className={`listItem todo text ${className}`}>
      {children}
    </div>
  );
};

HandwrittenItem.defaultProps = {
  className: "",
  style:{}
};
