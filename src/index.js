import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import Home from "./Components/Home";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';










ReactDOM.render(
    <App />,
  document.getElementById('root')
);
serviceWorker.unregister();
