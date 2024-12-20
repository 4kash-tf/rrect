import React, { useState } from 'react'
import { Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';



const StateBasics = () => {
    var [fname, setfname] = useState("")
    var [hname, sethname] = useState()
    const handleinput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    }

    const agees = () => {
        sethname(fname)
    }
  return (
      <div><br />
          <Typography varient='h6'>Heloo {hname} !</Typography>
          <br /><br />
          <TextField varient='outlined' label='enter yor name' onChange={handleinput} /><br/><br /><br />

          <Button variant="contained" color="SUBMIT" onClick={agees}>
              CONFIRM
          </Button>

          
    </div>
  )
}

export default StateBasics