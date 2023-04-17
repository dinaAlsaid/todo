import React from "react";
import { Controller } from "react-hook-form";

const RHFColor = ({ RHF, name, required, rules,defaultValue }) => {
  return (
    <>
      <Controller
        control={RHF.control}
        name={name}
        rules={{
          required: required,
          ...rules,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <input type="color"  {...field} defaultValue={defaultValue}/>
            {name}
          </>
        )}
      />
    </>
  );
};

export default RHFColor;
