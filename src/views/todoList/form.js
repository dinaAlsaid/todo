import React from "react";
import { Row, Col, Button,Form } from "react-bootstrap";
import { HiCheck, HiX } from "react-icons/all";
import { useForm } from "react-hook-form";

import { HandwrittenItem } from "components/designElements/HandwrittenItem/index.js";
import { TodoListItem } from "components/designElements/ListItem/index";

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
  // const [handleInputChange, handleSubmit] = useFormHandler();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.handleSubmit)}>
      <Row>
        <Col md="auto">
          <Row>
            <input
              type="text"
              autoComplete="off"
              name="text"
              placeholder="Add New Item"
              {...register("text", { required: { value: true, message: "what is the task???" } })}
            />
          </Row>

          <Row>
            <span className="text-danger">{errors.text?.message}</span>
          </Row>
        </Col>

        <Col md="auto">
          <Row>
            <input type="textarea" name="note" placeholder="note" autoComplete="off" {...register("note")} />
          </Row>
        </Col>

        <Col md="auto">
          <Row>
            <input type="date" name="due" {...register("due")} />
          </Row>
        </Col>

        <Col md="auto">
          <Row>
          <Form.Check 
            type="checkbox"
            label="importance"
            name="importance" 
            {...register("importance")}
          />
            {/* <input type="checkbox" name="importance" {...register("importance")} /> */}
          </Row>
        </Col>

        {/* <Col md="auto">
          <Row>
            <input
              type="text"
              autoComplete="off"
              name="text"
              placeholder="Add New Item"
              {...register("text", { required: { value: true, message: "what is the task???" } })}
            />
          </Row>

          <Row>
            <span className="text-danger">{errors.text?.message}</span>
          </Row>
        </Col>
        <Col md="auto">
          <input type="text" autoComplete="off" name="assignee" placeholder="Assigned To" {...register("assignee")} />
          <span>{errors.assignee?.message}</span>
        </Col>
        <Col md="auto">
          <input type="range" defaultValue="1" min="1" max="5" name="importance" {...register("importance")} />
          <span>{errors.importance?.message}</span>
        </Col> */}
        <Col>
          <Button variant="link" className="button-icon" type="submit">
            <HiCheck />
          </Button>
        </Col>
      </Row>
    </form>
  );
};
