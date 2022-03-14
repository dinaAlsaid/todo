import React from "react";
import "./style.scss";
import { randomColorGenerator } from "../../../Util/randomColorGenerator";

let availableColors = [];
const generateNewColor = () => {
  let newColor;
  let found = false;
  do {
    newColor = randomColorGenerator();
    found = availableColors.includes(newColor);
  } while (found);

  availableColors.push(newColor);
  return newColor;
};

const Tab = ({ title, onClick, children, color }) => {
  const tabStyle = {
    height: 100,
    backgroundColor: color,
    borderRadius: "0 5px 5px 0",
  };
  const titleStyles = {
    width: 100,
    textOverflow: "ellipsis",
    transformOrigin: "top left",
    padding: 5,
    boxSizing: "border-box",
  };

  return (
    <div onClick={onClick} style={tabStyle} className="journalTab">
      <div style={titleStyles} className="journalTabTitle">
        {title}
      </div>
    </div>
  );
};

export default Tab;
Tab.defaultProps = {
  title: "New Tab",
  color: generateNewColor(),
};
