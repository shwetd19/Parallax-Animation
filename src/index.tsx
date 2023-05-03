import * as React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';

import App from './App'
import './index.css'

const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
