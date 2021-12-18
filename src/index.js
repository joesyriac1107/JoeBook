import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { PostContextProvider } from './context/PostContext/PostContext'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8800/api'

ReactDOM.render(
  <React.StrictMode>
    <PostContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </PostContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
