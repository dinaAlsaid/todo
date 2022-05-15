import React from "react";
import { Row, Col } from "react-bootstrap";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index";
import { HiPlus, BsCircle, BsCircleFill, BsCircleHalf } from "react-icons/all";

function TodoList(props) {
  const getStatusIcon = (status) => {
    switch (status) {
      case true:
        return <BsCircleFill />;
      case "inProgress":
        return <BsCircleHalf />;
      case false:
      default:
        return <BsCircle />;
    }
  };
  return (
    <>
      {props.list.map((item) => (
        <HandwrittenItem key={item.text}>
          <ul className="list-style-type-none">
            <li>
              <Row>
                <Col sm={1} md={1}></Col>
                <Col className="">
                  {/* TODO: difficulty changed to urgency and connected to an icon (key)
                   */}
                  <span className="bullet-icons small hover-pointer m-2" onClick={() => props.handleComplete(item)}>
                    {getStatusIcon(item.complete)}
                  </span>
                  <span className="task" onClick={() => props.handleComplete(item)}>
                    {item.text}
                  </span>
                </Col>
                <Col>
                  <small className="float">Difficulty: {item.difficulty}</small>
                </Col>
              </Row>
            </li>
          </ul>
        </HandwrittenItem>
      ))}

      {!props.showAddForm && (
        <HandwrittenItem key="new item">
          <Row>
            <Col sm={1} md={1} onClick={props.onAddItemClick}>
              <HiPlus className="hover-pointer bullet-icons" />
            </Col>
          </Row>
        </HandwrittenItem>
      )}
    </>
  );
}

export default TodoList;

TodoList.defaultProps = {
  showAddForm: () => {},
};
