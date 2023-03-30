import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledText = styled(Box)(({ theme }) => ({
  "& *": {
    fontFamily: "little sunshine",
    fontSize: "1.2rem",
    lineHeight: "initial",
    textTransform: "lowercase",
    letterSpacing: ".35rem",
  },
}));

export const HandwrittenItem = ({ children }) => {
  return <StyledText className={`listItem todo text `}>{children}</StyledText>;
};
