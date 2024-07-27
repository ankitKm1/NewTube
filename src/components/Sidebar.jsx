import React,{ useContext, useState } from 'react'
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material"
import { Link } from 'react-router-dom'
import {FiMenu} from "react-icons/fi"
import { Context } from "../context/ContextApi"
import { categories } from '../utils/constants'
const logo= 'src/assets/logo_with_background.png'
const Sidebar = () => {
  const { mobileMenu, setMobileMenu }= useContext(Context);
  const toggleMenu= ()=> {
    setMobileMenu(!mobileMenu)
  }

  return (
    <>
      <IconButton 
        onClick={toggleMenu}
        style={{margin: '1rem'}}
      >
        <FiMenu style={{fontSize: '1.5rem', color: "#fff"}}/>
      </IconButton>
      <Link to='/'>
        <img src={logo} alt="logo" style={{scale: '.3'}} />
      </Link>
     
      <Drawer
        anchor='left'
        open={mobileMenu}
        onClose={toggleMenu}
        sx={{ backdropFilter: blur(0)}}
      >
        <Paper style={{backgroundColor: "#000", height: '100vh', borderRadius: '0px', }}>
          
          
          <IconButton onClick={toggleMenu}
            style={{margin: '1rem'}}
          >
            <FiMenu style={{fontSize: '1.5rem', color: "#fff", }}/>
          </IconButton>
          <Link to='/'>
        <img src={logo} alt="logo" style={{}} />
      </Link>
          <List
            sx={{width: '100%', maxWidth: '15rem'}}
            component="nav"
            aria-label='sidebar-menu-item'
          >
            {categories.map((item)=> (
              <ListItem key={item.name} disablePadding sx={{fontSize: '1.5rem', color: '#fff', marginX: '.5rem',borderRadius: '1rem'}}>
                <ListItemButton style={{}}>
                  <ListItemIcon style={{color: '#fff'}}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name}  style={{color: '#fff'}} /> 
                </ListItemButton>
                
              </ListItem>
            ))}
          </List>
          

        </Paper>
      </Drawer>
    </>
  )
}

export default Sidebar
