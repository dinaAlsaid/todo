import React, { useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Pages from './pages.js';
import Navbar from 'react-bootstrap/Navbar';
import useAjax from '../../hooks/useAjax.js'
import './todo.scss';
import Settings from './settings.js'
import { SettingsContext } from '../../context/settings.js';
import {PagesContext} from '../../context/pages.js'
import { Card } from 'react-bootstrap';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [newList, _addItem, _getTodoItems, _toggleComplete, _deleteItem] = useAjax(todoAPI);
  const contextSettings = useContext(SettingsContext);
  const contextPages =  useContext(PagesContext)
  // const [filteredItems,filterList]=usePages(active,newList);


  useEffect(() => {
    _getTodoItems()
  }, []);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>TODO list</Navbar.Brand>
      </Navbar>
      <div>
        <Settings />
      </div>
      <Card border="dark" style={{ margin: '0.5rem' }}>
        <Card.Header as="h2">
          There are {newList.filter(item => !item.complete).length} Items To Complete
        </Card.Header>
        <section className="todo">

          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>

          <div>
            <TodoList
              list={contextPages.filterForPages(contextPages.filterListItems(newList))}
              handleComplete={_toggleComplete}
              handleDelete={_deleteItem}
            />
          </div>
        </section>
        <Pages items={contextPages.filterListItems(newList)} perPage={contextSettings.numberOfItems} />
      </Card>
    </>
  );
};

export default ToDo;
