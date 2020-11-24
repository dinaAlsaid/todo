import React from 'react';
import Toast from 'react-bootstrap/Toast';

function TodoList(props) {

  return (
    <>
      {props.list.map(item => (

        <Toast onClose={() => props.handleDelete(item._id)}
          key={item._id}
        >
          <Toast.Header>
            <strong className={`mr-auto complete-${item.complete.toString()}`}>
                {item.complete?'done':'to do'}
            </strong>
            
            <small>{item.assignee}</small>
          </Toast.Header>

          <Toast.Body
            onClick={() => props.handleComplete(item._id)}
            className={`complete-${item.complete.toString()}`}
          >
            <span >{item.text}</span>
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}



export default TodoList;
