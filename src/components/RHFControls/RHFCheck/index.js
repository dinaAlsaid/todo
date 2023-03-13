import React from "react";
import { Controller } from "react-hook-form";
import { Row, Col, Form } from "react-bootstrap";

const RHFCheck = ({ RHF, type, name, required, label, rules }) => {
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
          <Form.Check type={type} label={label}>
            <Form.Check.Input type={type} {...field}/>
            <Form.Check.Label className="small">{label}</Form.Check.Label>
            <Form.Control.Feedback className="error">{error?.message}</Form.Control.Feedback>
          </Form.Check>
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
