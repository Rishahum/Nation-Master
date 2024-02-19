import React, {useState, useEffect} from 'react'
import  Link  from 'next/link'
import {  useRouter } from 'next/router'
import { Navbar } from '../common/navbar'
import { Table, Tr, Td, Th, Flex, Heading, Box, Button, Tbody, Thead, Stack,Center} from '@chakra-ui/react'
import { Country } from '@/lib/types'
import { DeleteDialog } from './components/DeleteDialog'
// import { countries } from '@/pages/api/countries'
// import Countr from '@/pages/api/countries'
import Delete from '@/pages/api/delete'
type Props = {
  countries: Country[]
}
export  function Listing (props: Props)  {
    // const [rows, setRows] = useState<Country[]>([]);
    const [isShowPop, setIsShowPop] = useState(new Array(props.countries.length).fill(false));
    
    
    // useEffect(()=>{
    //   async function information(){
    //     try{
    //         const url= await fetch(`http://localhost:2000/countries`)
    //         const result = await url.json()
    //         setRows(result)
            
    //     }catch(err){
    //       console.log(err)
    //     }
    // }
    //     information()

    // },[])
    const handleDelete=async (id: string, index: number)=>{
      await Delete({
        _id:id,
        country:"",
        capital:""
      })
      
        // information()
        // alert('record is deleted')
      //   const updatedRows = [...rows];
      // updatedRows.splice(index, 1);
      // setRows(updatedRows);
      const updatedIsShowPop = [...isShowPop];
      updatedIsShowPop[index] = false;
      setIsShowPop(updatedIsShowPop);
      
    }


  
    const showDelete=(index: number)=>{
      const updatedIsShowPop = [...isShowPop];
      updatedIsShowPop[index] = true;
      setIsShowPop(updatedIsShowPop);
    }
    const handleClosePopUp=(index : number)=>{
      const updatedIsShowPop = [...isShowPop];
      updatedIsShowPop[index] = false;
      setIsShowPop(updatedIsShowPop);
    }
  return (
    <>
    {isShowPop.some((value) => value) && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, backdropFilter: "blur(8px)" }} />
      )}
    <Box>
        <Center>
        <Flex >
        <Navbar  />
          <Heading   bgGradient='linear(to-l, #7928CA, #FF0080)' 
              bgClip='text'
              fontSize='4xl'
              fontWeight='extrabold'>
              <Center>Nation Master</Center></Heading>
      </Flex>
      </Center>
    </Box>
    
        {/* <Flex flexDirection='column' justifyContent='center' alignItems='center' > */}
          <Box>
            <Center mt={10} >
          <Heading as="h3" >List of countries</Heading></Center>
          </Box>
          <Box overflowX="auto"> {/* Added this line to handle horizontal overflow */}
          <Table > 
              <Thead>
                <Tr>
                  <Th textAlign='center'>Name</Th>
                  <Th textAlign='center'>Capital</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>  
              </Thead>
              <Tbody >
                {props.countries.length===0?(null):(
                  props.countries.map((row: Country, index: number)=>(
                      <Tr key={row._id} mb={5} >
                      <Td p={0} m={0} ><Center>{row.country}</Center></Td>
                      <Td p={0} m={0}><Center>{row.capital}</Center></Td>
                      <Td p={0} m={0}><Center>
                          <Button colorScheme='green' >
                          <Link href={`/edit/${row._id}`}>Edit</Link>
                          </Button></Center>
                      </Td>
                      <Td textAlign='center' p={0} m={0} ><Center>
                        <Button colorScheme='red' onClick={()=>{showDelete(index)} }>Delete</Button>
                        {isShowPop[index] && (
                          
                        <DeleteDialog handleDelete={handleDelete} handleClosePopUp={handleClosePopUp} index={index} id={row._id}  />
                        
                      )}</Center>
                      </Td>
                     
                    </Tr>
                 
                  ))
                )}
              </Tbody>
              
              
          </Table>
          </Box>
          
        
        
        
        
    </>
  )
}

