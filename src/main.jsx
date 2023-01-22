import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { UserContextProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
