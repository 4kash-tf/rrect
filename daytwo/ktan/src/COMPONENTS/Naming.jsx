import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Naming = () => {
    const [nbutton, setnbutton] = useState()
    const angular = ()=>{
        setnbutton("angular")
    }
    const react = ()=>{
        setnbutton("React")
    }
    const view = ()=>{
        setnbutton("view")
    }
    useEffect(() => { react()},[])
  return (
      <div> <br /><br />
          
          <Typography varient='h1'><h1><b>Welcome</b> {nbutton}  !!</h1></Typography> <br /> <br />
            
          
          <Button variant="contained" color="secondary" onClick={angular}>Angular</Button> <br /><br />
          
         
          <Button variant="contained" color="primary" onClick={react}>React</Button><br /><br />
         
        
          <Button variant="contained" color="success" onClick={view}>View</Button><br /><br />
        
    </div >         
          
    
  )
}

export default Naming