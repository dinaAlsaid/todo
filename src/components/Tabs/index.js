import React from "react";
import Tab from "../designElements/Tab";
import { HiPlus } from "react-icons/all";

const Tabs = (props) => {
  const tabsContainerStyle = {
    position: "absolute",
    left: "100%",
  };

  return (
    <div style={tabsContainerStyle}>
      {props.data?.map((item) => (
        <Tab key={item.title} onClick={item.onClick} color={item.color} />
      ))}
      <Tab title={() => <HiPlus />} onClick={props.addTab} width={50} />
    </div>
  );
};

export default Tabs;
