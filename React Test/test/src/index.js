import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './test';
import FunComp from './Components/funComp';
import ClassComp from './Components/ClassComp';
import ClassClc from './CLC/ClassClc';
import App from './Counter App/App';
import AppFu from './Counter App/AppFu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test/>
    <FunComp/>
    <ClassComp/>
    <ClassClc/>
    <App/>
    <AppFu/>
  </React.StrictMode>
);


