import React from "react";
import Button from "react-bootstrap/Button";
import useFormHandler from "../../hooks/form.js";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index.js";
import { HiCheck, HiX } from "react-icons/all";

function TodoForm(props) {
  const [handleInputChange, handleSubmit] = useFormHandler();

  return (
    <>
      <HandwrittenItem>
        <HiX onClick={props.onCloseClick} className="hover-pointer"/>

        <form onSubmit={(e) => handleSubmit(e, props.handleSubmit)}>
          <input type="text" autoComplete="off" name="text" placeholder="Add New Item" onChange={handleInputChange} />

          <input
            type="text"
            autoComplete="off"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />

          <input type="range" defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} />

          <Button variant="link" className="button-icon" type="submit">
            <HiCheck />
          </Button>
        </form>
      </HandwrittenItem>
    </>
  );
}

export default TodoForm;
