import { useState } from "react";
import axios from "axios";

const useAjax = () => {
  const url = "https://api-js401.herokuapp.com/api/v1/todo";
  const [response, setResponse] = useState([]);

  //GET
  const _getTodoItems = () => {
    axios({
      url: url,
      method: "get",
      mode: "cors",
    })
      .then((data) => data.data.results)
      .catch(console.error);
  };

  // POST
  const _addItem = (item) => {
    item.due = new Date();
    axios({
      url: url,
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      data: item,
    })
      .then((savedItem) => savedItem)
      .catch(console.error);
  };

  //PUT
  const _toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let fullurl = `${url}/${id}`;

      axios({
        url: fullurl,
        method: "put",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        data: item,
      })
        .then((savedItem) => {
          setResponse(list.map((listItem) => (listItem._id === item._id ? savedItem.data : listItem)));
        })
        .catch(console.error);
    }
  };

  //DELETE
  const _deleteItem = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      let fullurl = `${url}/${id}`;

      axios({
        url: fullurl,
        method: "delete",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        data: item,
      })
        .then(() => {
          setResponse(list.filter((listItem) => listItem._id !== item._id));
        })
        .catch(console.error);
    }
  };
  return [response, _addItem, _getTodoItems, _toggleComplete, _deleteItem];
};

export default useAjax;
