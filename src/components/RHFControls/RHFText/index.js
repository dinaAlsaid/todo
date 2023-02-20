import React from "react";
import { Controller } from "react-hook-form";

const RHFText = ({ RHF, type, name, required }) => {
  return (
    <Controller
      control={RHF.control}
      name={name}
      rules={{
        required: { value: required, message: "you forgot this" },
      }}
      render={({ field, fieldState: { error } }) => (<>
        <input 
        type={type} 
        autoComplete="off" 
        placeholder="Add New Item" 
        {...field}
        />
        
        </>
      )}
    />
  );
};

RHFText.defaultProps = {
  type: "text",
  required: false,
};

export default RHFText;
