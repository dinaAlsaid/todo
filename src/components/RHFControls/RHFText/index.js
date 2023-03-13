import React from "react";
import { Controller } from "react-hook-form";
import { Row, Col } from "react-bootstrap";

const RHFText = ({ RHF, type, name, required, placeholder, rules,defaultValue }) => {
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
          <Col md="auto">
            <Row>
              <input 
              type={type} 
              defaultValue={defaultValue} 
              autoComplete="off" 
              placeholder={placeholder} 
              {...field} 
              />
            </Row>
            <Row>
              <span className="text-danger small">{error?.message}</span>
            </Row>
          </Col>
        </>
      )}
    />
  );
};

RHFText.defaultProps = {
  type: "text",
  required: false,
  defaultValue:""
};

export default RHFText;
