import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bulma/css/bulma.min.css";
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
