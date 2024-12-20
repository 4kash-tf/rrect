import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <div>
          <AppBar position="static">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      DOM DOM
                  </Typography>
                  <Link to="/login"> 
                  
                      <Button color="succes">Login</Button>
                  </Link>
                  <Link to="/StateBasics">

                      <Button color="succes">StateBasics</Button>
                  </Link>
                  <Link to="/UpDown">
                      <Button color="succes">UpDown</Button>
                  </Link>
                  <Link to="/Naming">
                      <Button color="succes">Nameing</Button>
                  </Link>
                  <Link to="/Api">
                      <Button color="succes">Api</Button>
                  </Link>
                  <Link to="/P">
                      <Button color="succes">Pokemon</Button>
                  </Link>
              </Toolbar>
          </AppBar>
      
    </div>
  )
}

export default Navbar
