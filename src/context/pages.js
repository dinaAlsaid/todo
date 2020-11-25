import React, { useState, useContext } from 'react';
import { SettingsContext } from './settings.js';

export const PagesContext = React.createContext();

function PagesProvider(props) {
  const context = useContext(SettingsContext)

  const [active, setActive] = useState(1);
  // const [updatedList,setUpdated] = useState([]);
  // make sure it rerenders we have to set the new filtered list when settings change
  const filterListItems = (list) => {
    list = list.filter((item, index) => {
      if (!context.showCompleted) {
        return item;

      } else {
        if (!item.complete) {
          return item;
        }
      }
    });
    if (context.sorted === 'rating') {
      list = list.sort(compare)
    }

    return list;
  }
  function compare(a, b) {
    if (a.rating < b.rating) {
      return -1;
    }
    if (a.rating > b.rating) {
      return 1;
    }
    return 0;
  }
  const state = {
    active,
    setActive,
    filterListItems,
    filterForPages: (list) => {
      list = list.filter((item, index) => {
        console.log(Math.ceil(index / context.numberOfItems));

        if (Math.ceil(index / context.numberOfItems) === active) {
          return item;
        }
      });
      return list;
    }
  }
  return (
    <PagesContext.Provider value={state}>
      {props.children}
    </PagesContext.Provider>
  );

}
export default PagesProvider;
