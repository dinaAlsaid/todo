import React from "react";
import Tab from "../designElements/Tab";
import { HiPlus } from "react-icons/all";

const Tabs = (props) => {
  const tabsContainerStyle = {
    position: "absolute",
    left: "100%",
    transform: "rotate(90deg) translateY(-40px)", //40 px is the height of the tab
    width:"fit-content",
    transformOrigin: "top left",

  };

  return (
    <div style={tabsContainerStyle}>
      {props.data?.map((item) => (
        <Tab key={item.title} title={item.title} onClick={item.onClick} color={item.color} />
      ))}
      <Tab title={() => <HiPlus className=" bullet-icons"/>} onClick={props.addTab} style={{width:50}} />
    </div>
  );
};

export default Tabs;
