import React from "react";
import { Controller } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { InputUnstyled } from "@mui/base";

const RHFText = ({ RHF, type, name, required, placeholder, rules, defaultValue }) => {
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
          <InputUnstyled
            type={type}
            defaultValue={defaultValue}
            autoComplete="off"
            placeholder={placeholder}
            {...field}
          />
          <Box><Typography>{error?.message}</Typography></Box>
        </>
      )}
    />
  );
};

RHFText.defaultProps = {
  type: "text",
  required: false,
  defaultValue: "",
};

export default RHFText;
