import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import useFormHandler from '../../hooks/form.js';

function TodoForm(props) {

  const [handleInputChange, handleSubmit] = useFormHandler(props.handleSubmit);


  return (
    <>
      <Card>
        <Card.Header as="h4">Add Item</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><span>To Do Item</span></Form.Label>
              <Form.Control type="text" name="text" placeholder="Add To Do List Item" onChange={handleInputChange} />

              <Form.Label><span>Difficulty Rating</span></Form.Label>
              <Form.Control type="range" defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange}/>
            
              <Form.Label><span>Assigned To</span></Form.Label>
              <Form.Control
                type="text"
                name="assignee"
                placeholder="Assigned To"
                onChange={handleInputChange}
              />

              <Button variant="primary" type="submit">Add Item</Button>
            </Form.Group>
          </Form>
        </Card.Body>

      </Card>
    </>
  );

}

export default TodoForm;
