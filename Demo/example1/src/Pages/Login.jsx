import {  Container, Heading, VStack } from '@chakra-ui/react'
import  { useState , useContext } from 'react'
import axios from "axios"
import { Button , Input} from '@chakra-ui/react'
import { AuthContext } from '../Component/AuthContext'
import { Navigate } from 'react-router-dom'


function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const {Login,auth:{isLogged}}=useContext(AuthContext)

    async function handelClick(){
      try {
        let res = await axios({
          method : "Post",
          url:"https://reqres.in/api/login",
          data : {
            email,
            password 
          }
        })
        Login(res.data.token)
      
       console.log(res
       )
      } catch (error) {
        console.log(error)
        
      }
  }

   if(isLogged){
     return<Navigate to="/"/>
   }

  return (
    <Container >
     <VStack spacing={5}> 
        <Heading size='lg' fontSize='50px'>
           Login Page
         </Heading>
         <Input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setemail(e.target.value)}} size='lg'/>
         <Input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} size='lg'/>
         <Button onClick={handelClick} colorScheme='blue'>Login</Button>
         </VStack>
    </Container>
  )
}

export default Login
