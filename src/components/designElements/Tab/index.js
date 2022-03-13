import React from "react";
import "./style.scss";

const Tab = ({title,children}) => {
  return (
    <div style={tabStyle} className="journalTab">
      <div style={titleStyles} className="journalTabTitle">{title}</div>
    </div>
  );
};

export default Tab;
Tab.defaultProps={
    title:"New Tab"
}
const tabStyle = {
  height: 100,
  backgroundColor: "red",
  borderRadius: "0 5px 5px 0",
  position: "relative",
  left: "100%",

};
const titleStyles = {
    width:100,
    textOverflow:"ellipsis",
    transformOrigin:"top left",
    padding:5,
    boxSizing:"border-box",


}