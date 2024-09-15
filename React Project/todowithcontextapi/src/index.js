import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Todoprovider } from './Todocontext';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todoprovider>
    <App />
    </Todoprovider>
  </React.StrictMode>
);


