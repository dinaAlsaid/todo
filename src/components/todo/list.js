import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList(props) {

  return (
    <ListGroup as="ul">
      {props.list.map(item => (
        <ListGroup.Item as="li" 
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          action onClick={() => props.handleComplete(item._id)}
        >
            {item.text}
        </ListGroup.Item>

      ))}
    </ListGroup>
  );
}



export default TodoList;
