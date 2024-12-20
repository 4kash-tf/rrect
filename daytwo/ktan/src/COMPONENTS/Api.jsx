import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios'


const Api = () => {
    var[user,setuser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => { 
            console.log(response.data)
            setuser(response.data)
        })
  return (
    <div><br /><br />
          <TableContainer>
              <Table border='8'>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Username</TableCell>
                          <TableCell>city</TableCell>
                         
                          
                     </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((mon) =>{
                        return (
                          <TableRow>
                              <TableCell>{mon.name}</TableCell>
                              <TableCell>{mon.username}</TableCell>
                              <TableCell>{mon.city}</TableCell>
                              <TableCell></TableCell>

                          </TableRow>
                      )
                      }
                      )}
                   </TableBody>
              </Table>
      </TableContainer>
    </div>
  )
}

export default Api
