import React, { useEffect, useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFunnel } from "react-icons/all";

import sort from "Util/sort";
import TodoForm from "./form.js";
import TodoList from "components/todo/list.js";
import Settings from "views/settings";
import Tabs from "components/Tabs/index";
import { PageTitle } from "components/designElements/PageTitle/index.js";
import { NoteBookPage } from "components/designElements/noteBookPage/index";
import { TodoListContainer } from "components/designElements/TodoListContainer/index";
import { SettingsContext } from "context/settings.js";

import "components/designElements/commonStyles.scss";
import { useStorage } from "hooks/useStorage.js";
import { useFilter } from "hooks/useFilter.js";

const ToDo = () => {
  const contextSettings = useContext(SettingsContext);
  // const [shownItems, setShownItems] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const { _addItem, _getTodoItems, _toggleComplete, _deleteItem, data } = useStorage(false);
  const { _filter, _sort ,FilteredData} = useFilter(data);

  useEffect(() => {
    const getAllItems = async () => {
      await _getTodoItems();
    };

    getAllItems();
  }, []); //eslint-disable-line

  // useEffect(() => {
    // setShownItems(sortList(filterCompleted([...data])));
  // }, [data, contextSettings.showCompleted, contextSettings.sorted]); //eslint-disable-line

  // filters
  // const filterCompleted = (arr) => {
  //   return arr.filter((item) => {
  //     //eslint-disable-line

  //     if (!contextSettings.showCompleted) {
  //       return item;
  //     } else {
  //       if (item.complete === false) {
  //         return item;
  //       }
  //     }
  //   });
  // };

  // // TODO: fix sort
  // const sortList = (arr) => {
  //   if (contextSettings.sorted === "None") {
  //     return arr;
  //   } else if (contextSettings.sorted === "desc") {
  //     return arr.sort(sort.descend);
  //   } else if (contextSettings.sorted === "asce") {
  //     return arr.sort(sort.ascend);
  //   }
  // };

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
