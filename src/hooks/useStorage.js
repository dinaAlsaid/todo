import { useState } from "react";

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
        res = localStorage.getItem("todoList");
      }
      if (res && res.length) {
        setData([...res]);
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
        let list = localStorage.getItem("todoList");
        res = list.push(item);
        localStorage.setItem("todoList", list);
      }
      setData([...data, ]);

    } catch (err) {
      console.error(err);
    }
  };

  //PUT
  const _toggleComplete = (item) => {
    try {
      if (item._id) {
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
        }
        setData(data.map((listItem) => (listItem._id === item._id ? item : listItem)));

      }
    } catch (err) {
      console.error(err);
    }
  };

  //DELETE
  const _deleteItem = (item) => {
    try {
      if (online === true) {
        if (item._id) {
          // let fullurl = `${url}/${item._id}`;
          // return axios({
          //   url: fullurl,
          //   method: "delete",
          //   mode: "cors",
          //   cache: "no-cache",
          //   headers: { "Content-Type": "application/json" },
          //   data: item,
          // }).then((savedItem) => savedItem.data);
        }
      } else {
      }
      setData(data.filter((listItem) => listItem._id !== item._id));

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
