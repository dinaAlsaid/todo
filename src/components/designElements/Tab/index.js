import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useRandomColor } from "hooks/useRandomColor";

const StyledTab = styled(Box)(({ theme }) => ({
  height: "fit-content",
  // width: 100,
  minWidth:50,
  maxWidth:100,
  padding: 5,
  boxSizing: "border-box",
  display: "inline-block",
  borderRadius: "10px 10px 0 0",
  textAlign: "center",
  textOverflow: "ellipsis",
}));

const Tab = ({ title, onClick, style }) => {

  return (
    <StyledTab
      onClick={onClick}
      sx={{
        backgroundColor: useRandomColor(),
        ...style,
      }}
    >
      {typeof title === "function" ? title() : title}
    </StyledTab>
  );
};

export default Tab;
Tab.defaultProps = {
  title: "New Tab",
  style: {},
  onClick: () => {},
};

Tab.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
