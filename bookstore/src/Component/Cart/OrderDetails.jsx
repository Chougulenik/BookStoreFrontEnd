import React from 'react';
import Header from '../Dashboard/Navbar/Navbar';
import './UserDetails.css';
import { Card } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const OrderDetails = () => {
  return (
    <div>
    <Header></Header>
    <div>
    <h1 className='header'>Order Placed Successfully</h1></div>
    <span>Hurray!!! Your Order is Confirmed <br/> the order Id is #274672348 save the order id</span>
    <Card  sx={{width: 800}} >
    <TableContainer >
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell >Contact</TableCell>
            <TableCell >Address</TableCell>
           
          </TableRow>
        </TableHead>
        </Table>
        </TableContainer>
    </Card>
    </div>
   
  )
}

export default OrderDetails;
