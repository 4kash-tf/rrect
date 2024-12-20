import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Signup = () => {
  return (
      <div>
          <h1>Signup</h1>
          <label htmlFor="Name">  </label>
          <TextField id="filled-basic" label="email" variant="filled" /><br></br>
          <label htmlFor="email:"></label><br />
          <TextField id="filled-basic" label="password" variant="filled" /><br />
          <label htmlFor="password"></label><br />
          <Button color="secondary"></Button>
          <Button variant="contained" color="success">
              CONFIRM
          </Button>
      
    </div>
  )
}

export default Signup
