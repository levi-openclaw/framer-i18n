import React from 'react'
import ReactDOM from 'react-dom/client'
import { framer } from 'framer-plugin'
import { App } from './App'
import './styles/globals.css'

framer.showUI({
  width: 340,
  height: 500,
  resizable: true,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
