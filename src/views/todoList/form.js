import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { HiCheck, HiX } from "react-icons/all";
import { useForm } from "react-hook-form";

import { HandwrittenItem } from "components/designElements/HandwrittenItem/index.js";
import { TodoListItem } from "components/designElements/ListItem/index";
import RHFText from "components/RHFControls/RHFText";
import RHFCheck from "components/RHFControls/RHFCheck";
import RHFDatePicker from "components/RHFControls/RHFDatePicker";

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
  const RHF = useForm();

  const submit = async (data) => {
    await props.handleSubmit(data)
  };
  return (
    <form onSubmit={RHF.handleSubmit(submit)}>
      <Row>
        <RHFText RHF={RHF} name="task" placeholder="Add New Item" required={true} />
        <RHFText RHF={RHF} type="textarea" name="note" placeholder="note" />
        <RHFDatePicker RHF={RHF} name="due" />

        <Col md="auto">
          <Row>
            <RHFCheck RHF={RHF} name="importance" label="importance"  />
          </Row>
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
