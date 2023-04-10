import React from "react";
// import { Row, Col, Button, Form } from "react-bootstrap";
import { Grid, Button, Box } from "@mui/material";

import { HiCheck, HiX } from "react-icons/all";
import { useForm } from "react-hook-form";
import { TodoListItem } from "components/designElements/ListItem/index";
import RHFText from "components/RHFControls/RHFText";
import RHFCheck from "components/RHFControls/RHFCheck";
import RHFDatePicker from "components/RHFControls/RHFDatePicker";

function TodoForm(props) {
  return (
    <>
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
    </>
  );
}

export default TodoForm;

const AddItemForm = (props) => {
  const RHF = useForm();

  const submit = async (data) => {
    await props.handleSubmit(data);
  };
  return (
    <Box component="form" onSubmit={RHF.handleSubmit(submit)}>
      <Grid item>
        <RHFText RHF={RHF} name="task" placeholder="Add New Item" required={true} />
      </Grid>

      <Grid item>
        <RHFText RHF={RHF} type="textarea" name="note" placeholder="note" />
      </Grid>

      <Grid item>
        <RHFDatePicker RHF={RHF} name="due" />
      </Grid>

      <Grid item>
        <RHFCheck RHF={RHF} name="importance" label="importance" />
      </Grid>

      <Grid item>
        <Button variant="link" className="button-icon" type="submit">
          <HiCheck />
        </Button>
      </Grid>
    </Box>
  );
};
