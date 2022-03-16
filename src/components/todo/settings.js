import React, { useContext } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { SettingsContext } from "../../context/settings.js";

function Settings() {
  const context = useContext(SettingsContext);

  return (
    <Container>
      <Form>
        <Row>
          {/* <Col>
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
          </Col> */}
          <Col>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Show how much is left"
              onChange={context.toggleShowCompleted}
            />
          </Col>
        </Row>

        <Row>
          <Col>
          <Form.Label>What to do first</Form.Label>
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="Doesn't matter" value="None" />
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="Difficult stuff" value="desc" />
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="Difficult Easy stuff" value="asce" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default Settings;
