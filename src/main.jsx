import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ProviderContext from './context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </React.StrictMode>
)
