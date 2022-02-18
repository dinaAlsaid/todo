import React from "react";
import Toast from "react-bootstrap/Toast";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index";

function TodoList(props) {
  return (
    <>
      {props.list.map((item) => (
        <HandwrittenItem
          className={`complete-${item.complete.toString()}`}
          onClick={() => props.handleComplete(item)}
        >
          {/* <Toast onClose={() => props.handleDelete(item)} key={item._id}> */}
          <section>{/* <small>{item.assignee}</small> */}</section>
          {/* TODO: difficulty changed to urgency and connected to an icon (key)
           */}
          <div>
            <span>{item.text}</span>
            <small className="float">Difficulty: {item.difficulty}</small>
          </div>
        </HandwrittenItem>
      ))}
    </>
  );
}

export default TodoList;
