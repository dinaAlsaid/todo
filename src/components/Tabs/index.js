import React from "react";
import Tab from "../designElements/Tab";

const Tabs = (props) => {

  const tabsContainerStyle = {
    position: "absolute",
    left: "100%",
  };

  return (
    <div style={tabsContainerStyle}>
      <Tab {...props}>{props.children}</Tab>
    </div>
  );
};

export default Tabs;
