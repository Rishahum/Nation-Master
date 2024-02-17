import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Navbar } from '../common/navbar'
import { Heading, Button, Input, Text, Grid, GridItem, Center, Box, Flex } from '@chakra-ui/react'
import edit from '@/pages/api/update'
import { Country } from '@/lib/types'

type Props = {
  country: Country
}


export function Edit(props: Props) {
  const router = useRouter()
  const id = router.query.id
  const [newcountry, setCountry] = useState('');
  const [newcapital, setCapital] = useState('');
  // useEffect(()=>{
  //     information()
  // },[])
  // const information=async()=>{
  //     let result= await fetch(`http://localhost:2000/country/get/${id}`)
  //     const data = await result.json()

  //     console.log(result);
  //      setCapital(data.capital)
  //     setCountry(data.country)
  // }


  const handleEdit = async () => {
    await edit({
      _id: id!.toString(),
      country: newcountry,
      capital: newcapital
    })
    // result = await result.json()
    // console.log(result)
    router.push('/listing')
  }
  const handleCancel = () => {
    router.push('/listing')
  }

  return (
    // <div className='edit'>
    <>
      <Box>
        <Center>
          <Flex mt={3}>
            <Navbar />
            <Heading ml={30} bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontSize='4xl'
              fontWeight='extrabold'><Center>
                Nation Master</Center></Heading>
          </Flex>
        </Center>
      </Box>



      <Grid templateRows='repeat(5, 0.5fr)'
        templateColumns='repeat(6, 1fr)'

        m={5} mt={100} >
        <GridItem colSpan={5} >

          <Text ml={2}>Country's Name</Text>
        </GridItem>

        <GridItem colSpan={6} mb={7} ><Input type="text" name="country" value={props.country.country} onChange={(e) => { setCountry(e.target.value) }} /></GridItem>



        <GridItem colSpan={5}><Text ml={2}>Capital's Name</Text></GridItem>
        <GridItem colSpan={6} mb={7}><Input type="text" name="capital" value={props.country.capital} onChange={(e) => { setCapital(e.target.value) }} /></GridItem>





        <GridItem colSpan={3} ><Center>
          <Button colorScheme="green" onClick={handleEdit}>Update</Button>
        </Center></GridItem>
        <GridItem colSpan={3}><Center>
          <Button colorScheme="red" onClick={handleCancel}>Cancel</Button>
        </Center></GridItem>




      </Grid>

    </>

  )
}



