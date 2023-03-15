import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledPage = styled(Box)(({ theme }) => ({
  transform: "rotate(1deg)",
  borderRadius: "1px 3px 3px 0px",
  height: "70vw",
  width: "66vw",
}));

export const NoteBookPage = ({ children }) => {
  return <StyledPage className="paper noteBookPage">{children}</StyledPage>;
};

NoteBookPage.defaultProps = {
  style: {},
};
