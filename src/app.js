import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo-connected.js';
import Login from './components/todo/login';
import LoginProvider from './context/login.js';
import SettingsProvider from './context/settings.js';
import PagesProvider from './context/pages.js';


export default function App() {
  return (
    <>
    <LoginProvider>
      <Login />
      <SettingsProvider>
        <PagesProvider>
        <ToDo />
        </PagesProvider>
      </SettingsProvider>
    </LoginProvider>
    </>
  );

}
