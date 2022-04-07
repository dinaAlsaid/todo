import React from "react";
import "./styles.scss";

export const HandwrittenItem = ({ style, className, children }) => {
  const itemStyles = {
    fontFamily: "little sunshine",
    fontSize: "1.8rem",
    lineHeight: "initial",
    textTransform: "uppercase",
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
