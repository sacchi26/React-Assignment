import {  Flex, Button } from '@chakra-ui/react'
import react from 'react'
import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthContext'



let Data = [
    {
        to: "/",
        label:"HOME"
    },
    {
        to: "/about",
        label:"ABOUT"
    },
    {
      to: "/Products",
      label:"PRODUCTS"
  },
    {
        to: "/login",
        label:"LOGIN"
    },
    
    
]

function Navbar() {
  const {LogOut}=useContext(AuthContext)
  return (
    <Flex  align="Center" justify="space-around" fontWeight="bold" backgroundColor="skyblue" p={4}>
      {Data.map((e)=>(
        <Link key={e.to} to={e.to}>
            {e.label}
        </Link>
      ))}
       <Button onClick={LogOut}>LOGOUT</Button>
      </Flex>
    
  )
}

export default Navbar
