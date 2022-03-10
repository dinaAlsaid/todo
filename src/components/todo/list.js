import React from "react";
import { Row, Col } from "react-bootstrap";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index";
function TodoList(props) {
  return (
    <>
      {props.list.map((item) => (
        <HandwrittenItem key={item.text} className={`complete-${item.complete.toString()}`}>
          <Row>
            <Col sm={1} md={1} onClick={() => props.handleDelete(item)}>
              <span className="delete">X</span>
            </Col>
            <Col>
              {/* <section><small>{item.assignee}</small></section> */}
              {/* TODO: difficulty changed to urgency and connected to an icon (key)
               */}
              <span className="task" onClick={() => props.handleComplete(item)}>{item.text}</span>
            </Col>
            <Col>
              <small className="float">Difficulty: {item.difficulty}</small>
            </Col>
          </Row>
        </HandwrittenItem>
      ))}
    </>
  );
}

export default TodoList;
