import React, { useState, useEffect } from 'react'
import { Box, Select, Flex, Heading, Center, Container } from '@chakra-ui/react'
import { Navbar } from "../common/navbar"
import { Country } from '@/lib/types'

type Props = {
  countries: Country[]
}

export function Home(props: Props) {
  const [capital, setCapital] = useState<string>()
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCapital = props.countries.find((choice: Country) => choice.country === event.target.value)?.capital;

    setSelectedCountry(event.target.value);
    setCapital(selectedCapital);
  };

  return (
    <>
      {/* <Container> */}
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
      <Flex justify="center" align="center" direction="column" height="100vh"  >
      <Container width="100vw" m={0} >
        <Select onChange={handleCountryChange} value={selectedCountry} placeholder="select country">
          <option key="default" disabled value="">Selected country</option>
          {props.countries.length === 0 ? (<div>nothing</div>) :
            (
              props.countries.map((choice: Country, index: number) => (
                <option key={index}>{choice.country}</option>
              )))}</Select></Container>
      <Heading as="h5" >{capital}</Heading>
      </Flex>
      {/* </Container> */}
    </>
  )
}


