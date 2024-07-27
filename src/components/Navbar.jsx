import React, { useContext } from 'react'
import { Button, Drawer, Stack } from '@mui/material'

import Sidebar from './Sidebar'
const Navbar = () => {
 
  return (
    <Stack direction="row"alignItems="center" p={1} sx={{position: "sticky", background: '#000', top: 0, justifyContent: "space-between"}}>
      <Sidebar />
      
    </Stack>
  )
}

export default Navbar
