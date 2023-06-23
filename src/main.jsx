import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { VotacionProvider } from './context/VotacionContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VotacionProvider>
      <App />
    </VotacionProvider>
  </React.StrictMode>,
)
