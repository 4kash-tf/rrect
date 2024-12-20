import React, { useState } from 'react'
import Button from '@mui/material/Button';

const UpDown = () => {
    const [counter, setCounter] = useState(0);
    const incrementsCounter = () => {
        setCounter(counter + 1);

    
        
    }
    const decrementsCounter = () => {
        setCounter(counter - 1);
        }

    return (
        <div>
            <p>CurrentNo{counter} </p>
            <Button varient='contained' onClick={incrementsCounter}> increment counter</Button> 
            <Button varient='contained' onClick={decrementsCounter}> decrement counter</Button>
      </div>
    
  )
}

export default UpDown
