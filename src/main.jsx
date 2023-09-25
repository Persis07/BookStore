import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Container from "./context/Container"
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
)
