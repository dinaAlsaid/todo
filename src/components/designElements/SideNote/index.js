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
  [`${theme.breakpoints.up("xs")} `]: {
    maxWidth: theme.components.PaperSize.portrait.A6.width,
  },
  [`${theme.breakpoints.up("sm")} `]: {
    maxWidth: theme.components.PaperSize.portrait.A6.width,
  },
  [`${theme.breakpoints.up("md")} `]: {
    maxWidth: theme.components.PaperSize.portrait.A6.width,
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
