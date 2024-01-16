
import React from 'react'
import {
    FormControl,
    FormLabel,
    
    Input,
    Text,
    Container,
    Button
  } from '@chakra-ui/react'
//import { Form } from 'react-router-dom'

export default function Booking() {
  return (
    <>
<div style={{ backgroundColor: '#495e57' }}>
  <Text  align='center' fontSize='3xl'  color='white'>book a table</Text>
</div>
< div style={{ backgroundColor: 'rgb(237, 239, 238)' }}>


<Container>

<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input bg='white' type='text' />
</FormControl>
 

 <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input bg='white' type='text' />
</FormControl>

<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input bg='white' type='text' />
</FormControl>

<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input bg='white' type='text' />
</FormControl>


<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input bg='white' type='text' />
</FormControl>

<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input bg='white' type='text' />
</FormControl>

<Button colorScheme='yellow' size='sm'>
    confirm booking 
  </Button>
    </Container>
    




    </div>
    </>
  )
}

