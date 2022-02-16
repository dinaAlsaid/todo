import React, { useEffect, useContext, useState } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import Pages from "./pages.js";
import useAjax from "../../hooks/useAjax.js";
import "./todo.scss";
import { SettingsContext } from "../../context/settings.js";
import { Card, Col, Row } from "react-bootstrap";
import compare from "../../Util/compare";

const ToDo = () => {
  const contextSettings = useContext(SettingsContext);
  const [allTodoList, setAllTodoList] = useState([]);
  const [shownItems, setShownItems] = useState([]);

  const [_addItem, _getTodoItems, _toggleComplete, _deleteItem] = useAjax();

  useEffect(() => {
    getAllItems();
  }, []); //eslint-disable-line
 
  useEffect(() => {
    let list = shownItems.filter((item, index) => {
      if (!contextSettings.showCompleted) {
        return item;
      } else {
        if (!item.complete) {
          return item;
        }
      }
    });
    setShownItems(list);
  }, [contextSettings.showCompleted]); // eslint-disable-line

  useEffect(() => {
    if (contextSettings.sorted === "rating") {
      let list = shownItems.sort(compare);
      setShownItems(list);
    }
  }, [contextSettings.sorted]); //eslint-disable-line

  const getAllItems = async () => {
    let response = await _getTodoItems();

    if (response) {
      setShownItems([...response.results]);
      setAllTodoList([...response.results]);
    }
    
  };
  
  return (
    <>
      <Card border="dark" style={{ margin: "0.5rem" }}>
        <Card.Header as="h2">
          There are {allTodoList.filter((item) => !item.complete).length} Items To Complete
        </Card.Header>

        <Row>
          <Col md={3}>
            <TodoForm handleSubmit={_addItem} />
          </Col>

          <Col md={2}>
            <TodoList
              list={shownItems} //contextPages.filterForPages(contextPages.filterCompletedItems(newList))
              handleComplete={_toggleComplete}
              handleDelete={_deleteItem}
            />
          </Col>
        </Row>

        <Pages items={shownItems} perPage={contextSettings.numberOfItems} />
      </Card>
    </>
  );
};

export default ToDo;
