import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { randomColorGenerator } from "../../../Util/randomColorGenerator";

const Tab = ({ title, onClick, style }) => {
  const [tabColor, setTabColor] = useState(randomColorGenerator());

  const tabStyle = {
    height: 40,
    width: 100,
    padding: 5,
    boxSizing: "border-box",
    display:"inline-block",
    backgroundColor: tabColor,
    borderRadius: "10px 10px 0 0",
    textAlign: "center",
    textOverflow: "ellipsis",
    ...style,
  };

  useEffect(() => {
    if (style.color) {
      setTabColor(style.color);
    } else {
      setTabColor(randomColorGenerator());
    }
  }, [style.color]);

  return (
    <div onClick={onClick} style={tabStyle} className="journalTab hover-pointer">
      {typeof title === "function" ? title() : title}
    </div>
  );
};

export default Tab;
Tab.defaultProps = {
  title: "New Tab",
  style:{},
  onClick:()=>{}
};

Tab.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
