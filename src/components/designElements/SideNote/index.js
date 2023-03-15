import React from "react";
import { HiChevronLeft } from "react-icons/all";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const TabsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "100%",
  transform: "rotate(-2deg)",
  height: "30vw",
  width: "19vw",
  fontFamily: "ReenieBeanie",
  textTransform: "lowercase",
  fontSize: "x-large",
}));

const SideNote = ({ children, show, onClose, style }) => {

  return (
    <>
      {show && (
        <TabsContainer className="paper side-note" >
          <div onClick={onClose}>
            <HiChevronLeft />
          </div>
          {children}
        </TabsContainer>
      )}
    </>
  );
};

export default SideNote;

