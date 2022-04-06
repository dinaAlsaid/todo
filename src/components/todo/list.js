import React from "react";
import { Row, Col } from "react-bootstrap";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index";
import { HiPlus, HiX } from "react-icons/all";

function TodoList(props) {
  return (
    <>
      {props.list.map((item) => (
        <HandwrittenItem key={item.text} className={`complete-${item.complete.toString()}`}>
          <Row>
            <Col sm={1} md={1} onClick={() => props.handleDelete(item)}>
              <span className="delete bullet-icons hover-pointer">
                <HiX />
              </span>
            </Col>
            <Col>
              {/* <section><small>{item.assignee}</small></section> */}
              {/* TODO: difficulty changed to urgency and connected to an icon (key)
               */}
              <span className="task" onClick={() => props.handleComplete(item)}>
                {item.text}
              </span>
            </Col>
            <Col>
              <small className="float">Difficulty: {item.difficulty}</small>
            </Col>
          </Row>
        </HandwrittenItem>
      ))}
      
      {!props.showAddForm&&<HandwrittenItem key="new item">
        <Row>
          <Col sm={1} md={1} onClick={props.onAddItemClick}>
            <HiPlus className="hover-pointer bullet-icons" />
          </Col>
        </Row>
      </HandwrittenItem>}
    </>
  );
}

export default TodoList;

TodoList.defaultProps = {
  showAddForm: () => {},
};
