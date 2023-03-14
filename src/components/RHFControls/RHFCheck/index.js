import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from "@mui/material";

const RHFCheck = ({ RHF, name, required, label, rules }) => {
  return (
    <Controller
      control={RHF.control}
      name={name}
      rules={{
        required: { value: required, message: "you forgot this" },
        ...rules,
      }}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormControlLabel control={<Checkbox {...field} />} label={label} />
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
};

RHFCheck.defaultProps = {
  type: "checkbox",
  required: false,
};

export default RHFCheck;
