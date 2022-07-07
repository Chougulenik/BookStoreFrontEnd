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

    // const [emailId, setEmailId] = useState("");
    // const [password, setPassword] = useState("");

    // const [userLogin, setLogin] = useState([]);
    const [ userLogin, setUserLogin ] = useState({ 
        emailId: '',
        password: '' });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + value);
        setUserLogin({...userLogin, [name]:value});
    }

    const loginUser = () => {
        BookStoreService.loginUser(userLogin).then((response) => {
          console.log(response.data);
        }).catch(error => {
          console.log(error);
        }) 
    }

  return (
    <div className='card'> 
    <Card sx={{ minWidth: 50 }}>
    
    {/* <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      > */}
      <div className='content'>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="EmailID" variant="filled"  name="emailId"
       value={userLogin.emailId} onChange={handleInput}/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Password" type="password" variant="filled"  name='password'
       value={userLogin.password} onChange={handleInput} />
      </div>
      <div className='button'>
      <Button sx={{ width: 150 }} variant="contained" color="success" onClick={() =>loginUser()}>Sign In</Button>
      <div>
          <Link href='/'>Sign Up</Link>
      </div>
      
      
      </div>
    
    {/* </Box> */}
    </div>
   
  </Card></div>
  )
}
export default BookStroeRegistration;
