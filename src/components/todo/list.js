import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList(props) {

  return (
    <ListGroup as="ul">
      {props.list.map(item => (
        <ListGroup.Item as="li" 
        className={`complete-${item.complete.toString()}`}
        key={item._id} 
        > 
        <span onClick={() => props.handleComplete(item._id)}>
        {item.assignee}: 
        {item.text}
        </span>
        <p  onClick={()=>props.handleDelete(item._id)}>X</p>
        </ListGroup.Item>

      ))}
    </ListGroup>
  );
}



export default TodoList;
