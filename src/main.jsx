import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"

import "./global.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
