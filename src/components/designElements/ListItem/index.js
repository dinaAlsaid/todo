import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsCircle, BsCircleFill, BsCircleHalf } from "react-icons/all";

export const TodoListItem = ({ icon, item, note, actionButton, status, handleStatus, handleAction }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case true:
        return <BsCircleFill />;
      case "inProgress":
        return <BsCircleHalf />;
      case false:
        return <BsCircle />;
      default:
        return <></>;
    }
  };

  return (
    <li>
      <Row>
        <Col sm={1} md={1}>
          {icon}
        </Col>
        <Col className="hover-pointer" onClick={handleStatus}>
          <span className="bullet-icons small m-2">{getStatusIcon(status)}</span>
          <span className="task">{item}</span>
          <li style={{marginInlineStart: "1.5rem"}}>{note}</li>
        </Col>
        <Col onClick={handleAction}>{actionButton}</Col>
      </Row>
    </li>
  );
};
