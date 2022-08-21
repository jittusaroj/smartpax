import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ToastContainer toastStyle={{ width: 500, zIndex: 9999, right: 180 }} />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)