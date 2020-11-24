import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import useAjax from '../../hooks/useAjax.js'
import './todo.scss';
// import axios from 'axios';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {


  const [newList,_addItem,_getTodoItems,_toggleComplete,_deleteItem]=useAjax(todoAPI);



  useEffect(_getTodoItems, []);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>TODO list</Navbar.Brand>
      </Navbar>

      <header>
        <h2>
          There are {newList.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={newList}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
