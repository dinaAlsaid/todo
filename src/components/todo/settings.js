import React, { useContext } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { SettingsContext } from "../../context/settings.js";

function Settings() {
  const context = useContext(SettingsContext);

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Label>
              <span>Number of notes per page</span>
            </Form.Label>
            <Form.Control
              type="range"
              defaultValue="3"
              min="3"
              max="7"
              name="numberOfNotes"
              onChange={context.setNumOfNotes}
            />
          </Col>
          <Col>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Show completed items"
              onChange={context.toggleShowCompleted}
            />
          </Col>
          <Col>
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="No sort" value="None" />
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="Rating" value="rating" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default Settings;
