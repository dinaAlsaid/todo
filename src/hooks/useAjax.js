import { useState } from 'react';
import axios from 'axios';

const useAjax = (url) => {
  const [list, setList] = useState([]);

  // POST
  const _addItem = (item) => {
    item.due = new Date();
    axios({
      url: url,
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: item
    })
      .then(savedItem => {
        console.log(savedItem);
        setList([...list, savedItem.data])
      })
      .catch(console.error);

  }

  //PUT
  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let fullurl = `${url}/${id}`;

      axios({
        url: fullurl,
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: item
      })
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));
        })
        .catch(console.error);
    }
  };
  //GET
  const _getTodoItems = () => {
    axios({
      url: url,
      method: 'get',
      mode: 'cors',
    })
      .then(data => setList(data.data.results))
      .catch(console.error);
  }

  //DELETE
  const _deleteItem =(id)=>{
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      let fullurl = `${url}/${id}`;

      axios({
        url: fullurl,
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: item
      })
      .then(savedItem => {
        setList(list.filter(listItem => listItem._id !== item._id ));
      })
        .catch(console.error);
    }

  }
  return [list, _addItem, _getTodoItems, _toggleComplete,_deleteItem]

}

export default useAjax;
// axios(config)
// // Send a POST request
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });
// // GET request for remote image in node.js
// axios({
//   method: 'get',
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });