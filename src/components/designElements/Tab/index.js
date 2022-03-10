import React from "react";

const Tab = ({title,children}) => {
  return (
    <div style={tabStyle}>
      <span style={titleStyles}>{title}</span>
    </div>
  );
};

export default Tab;
Tab.defaultProps={
    title:"New Tab"
}
const tabStyle = {
  height: 100,
  width: 40,
  backgroundColor: "red",
  borderRadius: "0 5px 5px 0",
};
const titleStyles = {
    width:100,
    textOverflow:"ellipsis",
    
}