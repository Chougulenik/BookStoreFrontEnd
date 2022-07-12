import React from 'react';
import { Card } from '@mui/material';
import { Link } from "react-router-dom";


import './BookDetial.css';

export const OrderSummary = () => {
  return (
    <div>
       <Card className='card'>
      
       <div className="myCartTextBox"><span> <Link to={'/ordersummary'}> Order Summary</Link></span></div>
        
       </Card>
      </div> 
  )
}
export default OrderSummary;
