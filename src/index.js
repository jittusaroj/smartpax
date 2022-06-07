import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer toastStyle={{ width: 500, zIndex: 9999, right: 180 }} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)