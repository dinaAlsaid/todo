import React from "react";
import { HiChevronLeft } from "react-icons/all";

import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const SideNoteContainer = styled(Paper)(({ theme }) => ({
  position: "fixed",
  right: 0,
  transform: "rotate(-2deg)",
  fontFamily: "ReenieBeanie",
  textTransform: "lowercase",
  fontSize: "x-large",
  zIndex: theme.zIndex.modal,
  //------portrait-------
  [`${theme.breakpoints.up("xs")} and (orientation:portrait)`]: {
    maxWidth: theme.components.PaperSize.portrait.A6.width,
  },
  [`${theme.breakpoints.up("sm")} and (orientation:portrait)`]: {
    maxWidth: theme.components.PaperSize.portrait.A6.width,
  },
  [`${theme.breakpoints.up("md")} and (orientation:portrait)`]: {
    maxWidth: theme.components.PaperSize.portrait.A6.width,
  },
  //------landscape-------
  [`${theme.breakpoints.up("xs")} and (orientation:landscape)`]: {
    maxWidth: theme.components.PaperSize.landscape.A6.width,
  },
  [`${theme.breakpoints.up("sm")} and (orientation:landscape)`]: {
    maxWidth: theme.components.PaperSize.landscape.A6.width,
  },
  [`${theme.breakpoints.up("md")} and (orientation:landscape)`]: {
    maxWidth: theme.components.PaperSize.landscape.A6.width,
  },
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
