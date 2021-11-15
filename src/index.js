import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


