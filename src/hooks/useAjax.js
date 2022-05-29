import axios from "axios";

const useAjax = () => {
  const url = process.env.REACT_APP_API;

  //GET
  const _getTodoItems = async () => {
    try {
      let res = await axios({
        url: url,
        method: "get",
        mode: "cors",
      });
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  };

  // POST
  const _addItem = (item) => {
    return axios({
      url: url,
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      data: item,
    })
      .then((savedItem) => savedItem.data)
      .catch(console.error);
  };

  //PUT
  const _toggleComplete = (item) => {
    if (item._id) {

      switch (item.status) {
        case "todo":
          item.status = "doing";
          break;
        case "doing":
          item.status = "done";
          break;
        case "done":
          item.status = "todo";
          break;
        default:
          item.status = "todo";
      }
      
      let fullurl = `${url}/${item._id}`;

      return axios({
        url: fullurl,
        method: "put",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        data: item,
      })
        .then((savedItem) => savedItem.data)
        .catch(console.error);
    }
  };

  //DELETE
  const _deleteItem = (item) => {
    if (item._id) {
      let fullurl = `${url}/${item._id}`;

      return axios({
        url: fullurl,
        method: "delete",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        data: item,
      })
        .then((savedItem) => savedItem.data)
        .catch(console.error);
    }
  };
  return [_addItem, _getTodoItems, _toggleComplete, _deleteItem];
};

export default useAjax;
