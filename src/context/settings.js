import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [numberOfItems, setNumber] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sorted, setSorted] = useState('rating');
  const state = {
    numberOfItems,
    showCompleted,
    sorted,
    setNumOfNotes: (e) => { 
      setNumber(e.target.value) 
    },
    toggleShowCompleted: () => {
      setShowCompleted(!showCompleted);
    },
    sortBy: (e) => {
      setSorted(e.target.value);
    },
  };


  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
