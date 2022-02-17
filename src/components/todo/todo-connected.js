import React, { useEffect, useContext, useState } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import Pages from "./pages.js";
import useAjax from "../../hooks/useAjax.js";
import { SettingsContext } from "../../context/settings.js";
import { Card, Col, Row } from "react-bootstrap";
import sort from "../../Util/sort";
// import "./todo.scss";

const ToDo = () => {
  const contextSettings = useContext(SettingsContext);
  const [allTodoList, setAllTodoList] = useState([]);
  const [shownItems, setShownItems] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const [_addItem, _getTodoItems, _toggleComplete, _deleteItem] = useAjax();

  useEffect(() => {
    getAllItems();
  }, []); //eslint-disable-line

  useEffect(() => {

    setShownItems(sortList(filterCompleted([...allTodoList])));

  }, [allTodoList, contextSettings.showCompleted, contextSettings.sorted]); //eslint-disable-line

  //filters
  const filterCompleted = (arr) => {
    return arr.filter((item) => {/* eslint-disable-line*/
      if (!contextSettings.showCompleted) {
        return item;
      } else {
        if (!item.complete) {
          return item;
        }
      }
    });
  };

  const sortList = (arr) => {
    if (contextSettings.sorted === "None") {
      return arr;
    } else if (contextSettings.sorted === "desc") {
      return arr.sort(sort.descend);
    } else if (contextSettings.sorted === "asce") {
      return arr.sort(sort.ascend);
    }
  };

  // const filterForPages = (arr) => {
  //   return arr.filter((item, index) => {
  //     // eslint-disable-line

  //     if (Math.ceil(index / contextSettings.numberOfItems) === activePage) {
  //       return item;
  //     }
  //   });
  // };

  //api calls
  
  const getAllItems = async () => {
    let response = await _getTodoItems();

    if (response) {
      setAllTodoList([...response.results]);
    }
  };

  const addItem = async (item) => {
    setAllTodoList([await _addItem(item), ...allTodoList]);
  };

  const updateCompleted = async (item) => {
    await _toggleComplete(item);
    setAllTodoList(allTodoList.map((listItem) => (listItem._id === item._id ? item : listItem)));
  };

  const deleteItem = async (item) => {
    await _deleteItem(item);
    setAllTodoList(allTodoList.filter((listItem) => listItem._id !== item._id));
  };

  return (
    <>
      <Card border="dark" style={{ margin: "0.5rem" }}>
        <Card.Header as="h2">
          There are {allTodoList.filter((item) => !item.complete).length} Items To Complete
        </Card.Header>

        <Row>
          <Col md={3}>
            <TodoForm handleSubmit={addItem} />
          </Col>

          <Col md={2}>
            <TodoList list={shownItems} handleComplete={updateCompleted} handleDelete={deleteItem} />
          </Col>
        </Row>

        <Pages
          items={shownItems}
          perPage={contextSettings.numberOfItems}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </Card>
    </>
  );
};

export default ToDo;
