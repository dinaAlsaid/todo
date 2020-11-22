import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newItem = {};
    setItem(newItem);
  };


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
