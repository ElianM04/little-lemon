
//import Booking from '../booking'

import React from 'react'
import { useState } from 'react';
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
    Container,
    Button,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
  } from '@chakra-ui/react'
//import { Form } from 'react-router-dom'


export default function Reservations() {
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    // Handle form submission logic here using the state values
    console.log({
      name,
      date,
      time,
      occasion,
      numberOfGuests,
      email,
    });


    const alertMessage = `
    Name: ${name}
    Date: ${date}
    Time: ${time}
    Occasion: ${occasion}
    Number of Guests: ${numberOfGuests}
    Email: ${email}
  `;
  alert(alertMessage);
  };
  
  return (
    <>
<div style={{ backgroundColor: '#495e57',padding:'30px'}}>
  <Text  align='center' fontSize='3xl'  color='white'>Book a table</Text>
</div>
< div style={{ backgroundColor: 'rgb(237, 239, 238)' }}>


<Container p='20px'>

<FormControl>
  <FormLabel p='2'>Your name</FormLabel>
  <Input bg='white' type='text' value={name} onChange={(e) => setName(e.target.value)} />

</FormControl>

 <FormControl>
  <FormLabel p='2'>Choose a date</FormLabel>
  <Input bg='white' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
</FormControl>
 
<FormControl>
  <FormLabel p='2'>Choose a time</FormLabel>
  <Input bg='white' type='time' value={time} onChange={(e) => setTime(e.target.value)} />
</FormControl>

<FormControl>
  <FormLabel p='2'>Occasion</FormLabel>
  <Input bg='white' type='text' value={occasion} onChange={(e) => setOccasion(e.target.value)} />
</FormControl>


<FormControl>
  <FormLabel p='2'>Number of guest</FormLabel>
  <NumberInput bg='white' max={10} min={1} value={numberOfGuests} onChange={(value) => setNumberOfGuests(value)}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl>

<FormControl>
  <FormLabel p='2'>Email address to confirm</FormLabel>
  <Input bg='white' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
</FormControl>
<Flex justify="center" mt={4}>
<Button colorScheme='yellow' size='sm' align="center" onClick={handleSubmit}>
    confirm booking 
  </Button>
  </Flex>
    </Container>
    




    </div>
    </>
  )
}
