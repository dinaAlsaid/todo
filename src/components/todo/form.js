import React from "react";
import Button from "react-bootstrap/Button";
import useFormHandler from "../../hooks/form.js";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index.js";
import { HiCheck, HiX, BsCircle } from "react-icons/all";
import { Row, Col } from "react-bootstrap";

function TodoForm(props) {
  const [handleInputChange, handleSubmit] = useFormHandler();

  return (
    <>
      <HandwrittenItem>
        <form onSubmit={(e) => handleSubmit(e, props.handleSubmit)}>
          <Row>
            <Col sm={1} md={1}></Col>

            <Col md="auto">
              <span className="bullet-icons small hover-pointer m-2">
                <BsCircle />
              </span>

              <input
                type="text"
                autoComplete="off"
                name="text"
                placeholder="Add New Item"
                onChange={handleInputChange}
              />
            </Col>
            <Col md="auto">
              <input
                type="text"
                autoComplete="off"
                name="assignee"
                placeholder="Assigned To"
                onChange={handleInputChange}
              />
            </Col>
            <Col md="auto">
              <input type="range" defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} />
            </Col>

            <Col sm={1} md={1} className="hover-pointer bullet-icons">
              <HiX onClick={props.onCloseClick} />
              <Button variant="link" className="button-icon" type="submit">
                <HiCheck />
              </Button>
            </Col>
          </Row>
        </form>
      </HandwrittenItem>
    </>
  );
}

export default TodoForm;
