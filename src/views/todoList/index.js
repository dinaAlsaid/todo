import React, { useEffect,  useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFunnel } from "react-icons/all";

import TodoForm from "./form.js";
import TodoList from "views/todoList/list.js";
import Settings from "views/settings";
import Tabs from "components/Tabs/index";
import { PageTitle } from "components/designElements/PageTitle/index.js";
import { NoteBookPage } from "components/designElements/noteBookPage/index";
import { TodoListContainer } from "components/designElements/TodoListContainer/index";

import "components/designElements/commonStyles.scss";
import { useStorage } from "hooks/useStorage.js";
import { useFilter } from "hooks/useFilter.js";

const ToDo = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const { _addItem, _getTodoItems, _toggleComplete, _deleteItem, data } = useStorage(false);
  const {FilteredData} = useFilter(data);

  useEffect(() => {
    const getAllItems = async () => {
      await _getTodoItems();
    };

    getAllItems();
  }, []); //eslint-disable-line


  //#region
  const addItem = async (item) => {
    await _addItem(item);
  };

  const updateCompleted = async (item) => {
    await _toggleComplete(item);
  };

  const deleteItem = async (item) => {
    await _deleteItem(item);
  };
  //#endregion

  const clickTab = () => {
    setShowSettings(!showSettings);
  };

  const tabsArray = [
    {
      title: () => <BsFunnel className=" bullet-icons" />,
      onClick: clickTab,
    },
  ];

  const addTab = () => {};

  return (
    <>
      <NoteBookPage>
        <Tabs data={tabsArray} addTab={addTab} />
        <Settings show={showSettings} onClose={clickTab} />
        <Container>
          <Row>
            <Col>
              <PageTitle title="Todo List" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TodoListContainer>
                <TodoList
                  onAddItemClick={() => {
                    setShowAddForm(true);
                  }}
                  showAddForm={showAddForm}
                  list={FilteredData}
                  handleStatus={updateCompleted}
                  handleDelete={deleteItem}
                />
                {showAddForm && (
                  <TodoForm
                    handleSubmit={addItem}
                    onCloseClick={() => {
                      setShowAddForm(false);
                    }}
                  />
                )}
              </TodoListContainer>
            </Col>
          </Row>

          {/* <Pages
          items={shownItems}
          perPage={contextSettings.numberOfItems}
          activePage={activePage}
          setActivePage={setActivePage}
        /> */}
        </Container>
      </NoteBookPage>
    </>
  );
};

export default ToDo;
