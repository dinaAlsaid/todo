import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const StyledPage = styled(Paper)(({ theme }) => ({
  transform: "rotate(1deg)",
  borderRadius: "1px 4px 4px 0px",

  [theme.breakpoints.up("xs")]: {
    ...theme.components.PaperSize.portrait.A6,
  },
  [theme.breakpoints.up("sm")]: {
    ...theme.components.PaperSize.portrait.A6,
  },
  [theme.breakpoints.up("md")]: {
    ...theme.components.PaperSize.portrait.A4,
  },

}));

export const NoteBookPage = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

NoteBookPage.defaultProps = {
  style: {},
};
