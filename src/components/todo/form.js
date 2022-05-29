import React from "react";
import Button from "react-bootstrap/Button";
import useFormHandler from "../../hooks/form.js";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index.js";
import { TodoListItem } from "../designElements/ListItem/index";

import { HiCheck, HiX } from "react-icons/all";
import { Row, Col } from "react-bootstrap";

function TodoForm(props) {
  return (
    <>
      <HandwrittenItem>
        <TodoListItem
          icon={<></>}
          item={<AddItemForm {...props} />}
          status={false}
          handleStatus={() => {}}
          actionButton={
            <span className="delete bullet-icons hover-pointer">
              <HiX />
            </span>
          }
          handleAction={props.onCloseClick}
        />
      </HandwrittenItem>
    </>
  );
}

export default TodoForm;

const AddItemForm = (props) => {
  const [handleInputChange, handleSubmit] = useFormHandler();

  return (
    <form onSubmit={(e) => handleSubmit(e, props.handleSubmit)}>
      <Row>
        <Col md="auto">
          <input type="text" autoComplete="off" name="text" placeholder="Add New Item" onChange={handleInputChange} />
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
          <input type="range" defaultValue="1" min="1" max="5" name="importance" onChange={handleInputChange} />
        </Col>
        <Col>
          <Button variant="link" className="button-icon" type="submit">
            <HiCheck />
          </Button>
        </Col>
      </Row>
    </form>
  );
};
