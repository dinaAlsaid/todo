import React from "react";
import Tab from "../designElements/Tab";
import { HiPlus } from "react-icons/all";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const TabsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "100%",
  transform: "rotate(90deg)", //40 px is the height of the tab
  transformOrigin: "bottom left",
  width: "80vh",
  display: "flex",
  flexWarp: "wrap",
  alignItems: "end",
}));

const Tabs = (props) => {
  return (
    <TabsContainer>
      {props.data?.map((item) => (
        <Tab key={item.title} title={item.title} onClick={item.onClick} color={item.color} />
      ))}
      <Tab title={() => <HiPlus className=" bullet-icons" />} onClick={props.addTab} />
    </TabsContainer>
  );
};

export default Tabs;
