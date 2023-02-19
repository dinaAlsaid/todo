import { useState } from "react";
import { v4 } from "uuid";

export const useStorage = (online = false) => {
  const [data, setData] = useState([]);

  //GET
  const _getTodoItems = async () => {
    try {
      let res = [];
      if (online === true) {
        // res = await axios({
        //   url: url,
        //   method: "get",
        //   mode: "cors",
        // });
        // res=res.data;
      } else {
        res = JSON.parse(localStorage.getItem("todoList"));
      }
      if (res && res.length) {
        setData(res);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // POST
  const _addItem = async (item) => {
    try {
      let res = [];
      if (online === true) {
        // res=await axios({
        //     url: url,
        //     method: "post",
        //     mode: "cors",
        //     cache: "no-cache",
        //     headers: { "Content-Type": "application/json" },
        //     data: item,
        //   })
        // res=res.data;
      } else {
        res = JSON.parse(localStorage.getItem("todoList"));

        item.id = v4();
        if (res && res.length) {
          res.push(item);
        } else {
          res = [item];
        }
        localStorage.setItem("todoList", JSON.stringify(res));
      }
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };

  //PUT
  const _toggleComplete = (item) => {
    try {
      let res = [];
      switch (item.status) {
        case "todo":
          item.status = "doing";
          break;
        case "doing":
          item.status = "done";
          break;
        case "done":
        default:
          item.status = "todo";
          break;
      }
      if (online === true) {
        // let fullurl = `${url}/${item._id}`;
        // return axios({
        //   url: fullurl,
        //   method: "put",
        //   mode: "cors",
        //   cache: "no-cache",
        //   headers: { "Content-Type": "application/json" },
        //   data: item,
        // }).then((savedItem) => savedItem.data);
      } else {
        let list = JSON.parse(localStorage.getItem("todoList"));
        res = [...list.map((listItem) => (listItem.id === item.id ? item : listItem))];
        localStorage.setItem("todoList", JSON.stringify(res));
      }

      if (res && res.length) {
        setData(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  //DELETE
  const _deleteItem = (item) => {
    try {
      let res = [];
      if (online === true) {
        // if (item._id) {
        // let fullurl = `${url}/${item._id}`;
        // return axios({
        //   url: fullurl,
        //   method: "delete",
        //   mode: "cors",
        //   cache: "no-cache",
        //   headers: { "Content-Type": "application/json" },
        //   data: item,
        // }).then((savedItem) => savedItem.data);
        // }
      } else {
        let list = JSON.parse(localStorage.getItem("todoList"));
        res = [...list.filter((listItem) => listItem.id !== item.id)];
        localStorage.setItem("todoList", JSON.stringify(res));
      }
      if (res && res.length) {
        setData(res);
      } else {
        setData([]);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  return {
    data,
    setData,
    _addItem,
    _getTodoItems,
    _toggleComplete,
    _deleteItem,
  };
};
