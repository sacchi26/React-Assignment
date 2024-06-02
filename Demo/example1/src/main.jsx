import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './Component/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
  <ChakraProvider>
  <App/>
  </ChakraProvider>
  </AuthContextProvider>
  </BrowserRouter>
   
)
