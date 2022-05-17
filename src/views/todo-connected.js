import React, { useEffect, useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFunnel} from "react-icons/all";

import sort from "../Util/sort";
import useAjax from "../hooks/useAjax.js";
import TodoForm from "../components/todo/form.js";
import TodoList from "../components/todo/list.js";
import Settings from "../components/todo/settings.js";
import Tabs from "../components/Tabs/index";
import SideNote from "../components/designElements/SideNote/index";
import { PageTitle } from "../components/designElements/PageTitle/index.js";
import { NoteBookPage } from "../components/designElements/noteBookPage/index";
import { SettingsContext } from "../context/settings.js";

import "../components/designElements/commonStyles.scss";

const ToDo = () => {
  const contextSettings = useContext(SettingsContext);
  const [allTodoList, setAllTodoList] = useState([]);
  const [shownItems, setShownItems] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [_addItem, _getTodoItems, _toggleComplete, _deleteItem] = useAjax();

  useEffect(() => {
    getAllItems();
  }, []); //eslint-disable-line

  useEffect(() => {
    setShownItems(sortList(filterCompleted([...allTodoList])));
  }, [allTodoList, contextSettings.showCompleted, contextSettings.sorted]); //eslint-disable-line

  //filters
  const filterCompleted = (arr) => {
    return arr.filter((item) => {      //eslint-disable-line

      if (!contextSettings.showCompleted) {
        return item;
      } else {
        if (item.complete === false) {
          return item;
        }
      }
    });
  };

  // TODO: fix sort
  const sortList = (arr) => {
    if (contextSettings.sorted === "None") {
      return arr;
    } else if (contextSettings.sorted === "desc") {
      return arr.sort(sort.descend);
    } else if (contextSettings.sorted === "asce") {
      return arr.sort(sort.ascend);
    }
  };

  //#region api calls
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
  //#endregion

  const clickTab = () => {
    setShowSettings(!showSettings);
  };

  const tabsArray = [
    {
      title: ()=><BsFunnel className=" bullet-icons"/>,
      onClick: clickTab,
    },
  ];

  const addTab = () => {};

  return (
    <>
      <Container>
        <NoteBookPage>
          {/* <div>There are {allTodoList.filter((item) => !item?.complete).length} Items To Complete</div> */}

          <Tabs data={tabsArray} addTab={addTab} />

          <SideNote show={showSettings} onClose={clickTab}>
            <Settings />
          </SideNote>
          <Row>
            <Col>
              <PageTitle title="Todo List" />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <TodoList
                onAddItemClick={() => {
                  setShowAddForm(true);
                }}
                showAddForm={showAddForm}
                list={shownItems}
                handleComplete={updateCompleted}
                handleDelete={deleteItem}
              />
            </Col>
          </Row>
          <Row>
            {showAddForm && (
              <Col md={12}>
                <TodoForm
                  handleSubmit={addItem}
                  onCloseClick={() => {
                    setShowAddForm(false);
                  }}
                />
              </Col>
            )}
          </Row>

          {/* <Pages
          items={shownItems}
          perPage={contextSettings.numberOfItems}
          activePage={activePage}
          setActivePage={setActivePage}
        /> */}
        </NoteBookPage>
      </Container>
    </>
  );
};

export default ToDo;
