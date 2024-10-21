import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthContextProvider from './contexts/AuthContext'
import ContextProvider from './contexts/ContextProvider'
import { Toaster } from 'react-hot-toast'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <AuthContextProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <App />
          <Toaster />
        </AuthContextProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
