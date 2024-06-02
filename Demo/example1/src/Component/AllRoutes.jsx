import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import PrivateRoute from "./PrivateRoute"
import Products from '../Pages/Products'


function AllRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={
        <PrivateRoute>
          <Home/>
        </PrivateRoute> 
        }/>
        <Route path='/about' element={
          <PrivateRoute>
        <About/>
        </PrivateRoute>
        }/>
        <Route path='/Products' element={
          <PrivateRoute>
        <Products/>
        </PrivateRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
       
    </Routes>
    </div>
  )
}

export default AllRoutes
