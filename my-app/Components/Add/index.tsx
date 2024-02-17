// import React from 'react'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Navbar } from '../common/navbar';
import { Country } from '@/lib/types'
import {  Heading, Button, Input, Text, Grid, GridItem, Center, Box, Flex } from '@chakra-ui/react'
import add from '@/pages/api/add';

export function Add  ()  {
  const router = useRouter();

  const [newcountry, setCountry] = useState('');
  const [newcapital, setCapital] = useState('');
  const back = ()=>{
    router.push('/listing')
  }
  const addItem = async () => {
    await add({
      _id: '',
      country: newcountry, 
      capital: newcapital
    })
    router.push('/listing');
  };
  // const addItem = async () => {
  //   let result= await fetch("http://localhost:2000/country/add",{
  //       method: 'post',
    //     body:JSON.stringify({country, capital}),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // })
  //   result = await result.json()
  //   router.push('/listing')
  // };
  return (
    <>
        <Box>
      <Center>
      <Flex mt={3}>
      <Navbar  />
        <Heading ml={30}  bgGradient='linear(to-l, #7928CA, #FF0080)' 
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'><Center>
          Nation Master</Center></Heading>
    </Flex>
    </Center>
    </Box>
    <Grid templateRows='repeat(5, 0.5fr)'
    templateColumns='repeat(6, 1fr)'
    
      m={5} mt={100}>
              
          
              
              
              
                  <GridItem  colSpan={5} >
                      
                      <Text ml={2}>Country's Name</Text>
                      </GridItem>
                      
                  <GridItem colSpan={6} mb={7} ><Input type="text"  name="country" value={newcountry} onChange={(e)=>{setCountry(e.target.value)}} /></GridItem>
              
              
              
                  <GridItem colSpan={5}><Text ml={2}>Capital's Name</Text></GridItem>
                  <GridItem colSpan={6} mb={7}><Input type="text" name="capital" value={newcapital} onChange={(e)=>{setCapital(e.target.value)}} /></GridItem>
              
              
          
          
              
              <GridItem colSpan={3} ><Center>
                  <Button  colorScheme="green"  onClick={addItem}>Add</Button></Center></GridItem>
              <GridItem colSpan={3}><Center>
                  <Button colorScheme="red"  onClick={back}>Cancel</Button></Center></GridItem>
              
           
           
          
        </Grid>
        </>
      
    
  )
}