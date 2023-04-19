import { useState,createContext } from 'react';

export const SettingsContext = createContext();

function SettingsProvider(props) {

  const [showCompleted, setShowCompleted] = useState(false);
  const [sorted, setSorted] = useState(0);
  const [numberOfItems, setNumber] = useState(3);
  
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
      setSorted(Number(e.target.value));
    },
  };


  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
