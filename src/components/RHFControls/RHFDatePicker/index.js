import React from "react";
import { Controller } from "react-hook-form";

const RHFDatePicker = ({ RHF, name, required, rules }) => {
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
          <input type="date" {...field} />
          <span className="text-danger small">{error?.message}</span>
        </>
      )}
    />
  );
};

RHFDatePicker.defaultProps = {
  required: false,
};

export default RHFDatePicker;
