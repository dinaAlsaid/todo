import React from "react";
import { styled } from "@mui/material/styles";

const StyledH2 = styled("h2")(({ theme }) => ({
  fontFamily: "alagambe",
  fontSize: "xxx-large",
  textAlign: "center",
  textTransform: "capitalize",
}));

export const PageTitle = ({ title }) => {
  return <StyledH2 className="text">{title}</StyledH2>;
};
