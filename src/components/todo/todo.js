import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import './todo.scss';

function ToDo() {

  const [list, setList] = useState([]);
  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };

  useEffect(() => {
    let newList = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(newList);
  }, []);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>TODO list</Navbar.Brand>
      </Navbar>

        <Card.Header as="h2">To Do List ({list.filter(item => !item.complete).length})</Card.Header>
        <Card body>
      <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
      </section>
        </Card>

    </>
  );

}

export default ToDo;
