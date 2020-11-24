import React, { useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import useAjax from '../../hooks/useAjax.js'
import './todo.scss';
import Settings from './settings.js'
import { SettingsContext } from '../../context/settings.js';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const context = useContext(SettingsContext)

  const [newList, _addItem, _getTodoItems, _toggleComplete, _deleteItem] = useAjax(todoAPI);

  let filteredList = newList.filter((listItem) => {
    if (context.showCompleted) {
      return listItem;
    } else {
      if (!listItem.complete) {
        return listItem;
      }
    }
  });
  filteredList = filteredList.filter((listItem, index) => {
    if (index > 0 && index <= context.numberOfItems) {
      return listItem;
    }
    console.log(context.numberOfItems);
  })

  useEffect(_getTodoItems, []);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>TODO list</Navbar.Brand>
      </Navbar>
      <div>
        <Settings />
      </div>
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
            list={filteredList}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
