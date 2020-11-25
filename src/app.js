import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo-connected.js';
import SettingsProvider from './context/settings.js';
import PagesProvider from './context/pages.js';


export default function App() {
  return (
    <>
    <SettingsProvider>
      <PagesProvider>
      <ToDo />
      </PagesProvider>
    </SettingsProvider>
    </>
  );

}
