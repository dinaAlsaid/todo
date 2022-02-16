import axios from "axios";

const useAjax = () => {
  const url = "https://api-js401.herokuapp.com/api/v1/todo";

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
    // .then((data) => data.results)
    // .catch(console.error);
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
      .then((savedItem) => savedItem.data)
      .catch(console.error);
  };

  //PUT
  const _toggleComplete = (item) => {
    if (item._id) {
      item.complete = !item.complete;

      let fullurl = `${url}/${item._id}`;

      axios({
        url: fullurl,
        method: "put",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        data: item,
      })
        .then((savedItem) => {
          return savedItem.data;
          // setResponse(list.map((listItem) => (listItem._id === item._id ? savedItem.data : listItem)));
        })
        .catch(console.error);
    }
  };

  //DELETE
  const _deleteItem = (item) => {
    if (item._id) {
      let fullurl = `${url}/${item._id}`;

      axios({
        url: fullurl,
        method: "delete",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        data: item,
      })
        .then(() => {
          return item;
          // setResponse(list.filter((listItem) => listItem._id !== item._id));
        })
        .catch(console.error);
    }
  };
  return [_addItem, _getTodoItems, _toggleComplete, _deleteItem];
};

export default useAjax;
