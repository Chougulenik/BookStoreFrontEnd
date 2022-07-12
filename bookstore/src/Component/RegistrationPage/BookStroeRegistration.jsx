import React, { useState } from 'react'
import { Card } from '@mui/material';
import CardContent from '@mui/material';
import './BookStoreRegistration.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import Link from '@mui/material/Link';
import BookStoreService from '../Service/BookStoreService';

export const BookStroeRegistration = () => {

  const [userRegistration, setUserRegistration] = useState({
    name:"",
    emailId:"",
    userName:"",
    password:"",
  });

  const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name + value);
      setUserRegistration({...userRegistration, [name] : value })
  }

  const addUser = (e) => {
    e.preventDefault();
    BookStoreService.addUsers(userRegistration).then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div> 
    <Card sx={{ minWidth: 600}}>
    
      <div className='content'>
     <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Name" variant="filled" onChange={handleInput} value={userRegistration.name} name="name" />
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="EmailID" variant="filled" onChange={handleInput} value={userRegistration.emailId} name="emailId"/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="UserName" variant="filled" onChange={handleInput} value={userRegistration.userName} name="userName"/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Password" type="password" variant="filled" onChange={handleInput} value={userRegistration.password} name="password"/>
      </div>
      <div className='button'>
      <Button sx={{ width: 150 }} variant="contained" color="success"  onClick={(e) =>addUser(e)}>Sign Up</Button>
      <div>
          <Link href='/login'>Sign In</Link>
      </div>
      </div>
    
   
    </div>
   
  </Card></div>
  )
}
export default BookStroeRegistration;
