import React from "react";
import { HiChevronLeft } from "react-icons/all";

import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const SideNoteContainer = styled(Paper)(({ theme }) => ({
  position: "fixed",
  // left: "100%",
  right:0,
  transform: "rotate(-2deg)",
  width: "19vw",
  fontFamily: "ReenieBeanie",
  textTransform: "lowercase",
  fontSize: "x-large",
  zIndex:1000
}));

const SideNote = ({ children, show, onClose, style }) => {
  return (
    <>
      {show && (
        <SideNoteContainer className="side-note">
          <div onClick={onClose}>
            <HiChevronLeft />
          </div>
          {children}
        </SideNoteContainer>
      )}
    </>
  );
};

export default SideNote;
