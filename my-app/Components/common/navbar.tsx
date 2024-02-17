import React from 'react';
import {  Menu, Button, MenuButton, MenuList, MenuItem, Container} from '@chakra-ui/react'
import Link from 'next/link';
export function Navbar  ()  {
  return (
    <>

    <Menu >
  <MenuButton as={Button} colorScheme='pink'>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem><Link href="/">Home</Link></MenuItem>
    <MenuItem><Link href="/listing">List</Link></MenuItem>
    <MenuItem> <Link href="/add">Add Country</Link> </MenuItem>
  </MenuList>
</Menu>
    </>
  )
}
