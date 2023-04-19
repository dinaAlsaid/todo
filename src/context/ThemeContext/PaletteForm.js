import React, { useContext } from "react";
import { useTheme, Box, Button } from "@mui/material";
import { ThemeContext } from "context/ThemeContext";
import RHFColor from "components/RHFControls/RHFColor";
import { useForm } from "react-hook-form";

const PaletteForm = () => {
  const { changecolor } = useContext(ThemeContext);
  const theme = useTheme();
  const RHF = useForm();

  const applyChanges = (data) => {
    changecolor(data, theme);
  };

  return (
    <Box
      component="form"
      onSubmit={RHF.handleSubmit(applyChanges)}
      display="flex"
      sx={{ flexWrap: "wrap" }}
    >
      {Object.keys(theme.palette).reduce((a, itemKey) => {
        if (typeof theme.palette[itemKey] == "object") {
          return [...a, <RHFColor defaultValue={theme.palette[itemKey].main} key={itemKey} name={itemKey} RHF={RHF} />];
        } else {
          return a;
        }
      }, [])}
      <Button type="submit">apply</Button>
    </Box>
  );
};

export default PaletteForm;
