import { useEffect, useState } from 'react'
import { Card, Divider, CardBody, CardFooter,Stack ,Image,ButtonGroup,Text,Button } from '@chakra-ui/react'
import { SimpleGrid , Box , Select} from '@chakra-ui/react'
import axios from 'axios'

const Products = () => {
  const [data , setData] = useState([])
  const [sort,setSort] = useState("desc")

  async function fetchData(){
    try {
      let res = await axios(`https://fakestoreapi.com/products?sort=${sort}`)
      setData(res.data)

      

    } catch (error) {
      console.log(error)
      
    }
  }
  
    useEffect (()=>
    {
      fetchData()
    },[sort])
  
  return (
    <Box>
       <Select onChange={(e)=>setSort(e.target.value)} >
      <option value="desc">Desc</option>
      <option value="asc">Asc</option> 
      
    </Select>
   <SimpleGrid columns={4} spacing={20}>
    {data.map(((e)=>
    
   <Card maxW='300px' key = {e.id} >
  <CardBody>
    <Image
      src={e.image}
      alt=''
      borderRadius='lg'
      height={200}
    />
    <Stack mt='6' spacing='3'>
      <Text>
        {e.title}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {e.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='pink'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='pink'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
))}
</SimpleGrid>
</Box>
)}

export default Products
