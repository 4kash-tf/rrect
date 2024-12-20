import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = () => {
  return (
      <div><br />
          <TextField id="filled-basic" label="email" variant="filled" /><br></br>
          <label htmlFor="Name:"></label><br />
          <TextField id="filled-basic" label="password" variant="filled" /><br /><br />
          <label htmlFor="password"></label><br />
          <Button color="secondary"></Button>
          <Button variant="contained" color="success">
              CONFIRM
          </Button>
      </div>
  )
}

export default Login