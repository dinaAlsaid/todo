import { Box } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";

const StyledColor = styled("input")(({ theme }) => ({
  "&[type='color']": {
    padding: 0,
    border: "none",
    cursor:"pointer",
    backgroundColor:"transparent", 
    [theme.breakpoints.up("md")]: {
      height: "30px",
      width: "30px",
    },
    [theme.breakpoints.down("md")]: {
      height: "40px",
      width: "40px",
    },
  },
}));

const RHFColor = ({ RHF, name, required, rules, defaultValue }) => {
  return (
    <Box>
      <Controller
        control={RHF.control}
        name={name}
        rules={{
          required: required,
          ...rules,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <StyledColor type="color" {...field} defaultValue={defaultValue} />
          </>
        )}
      />
      {name}
    </Box>
  );
};

export default RHFColor;
