import React, {useState} from 'react'
import { Card } from '@mui/material';

import './BookDetial.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Image from '../../assest/book1.jpg';



export const BookDetails = (props) => {

  const [qty, setQty] = useState(0);

  function decrement() {
    if(qty==0){
      return
    }
    else{
    setQty(qty - 1);
    }
  }

  function increment() {
    setQty(qty + 1);
  }

  function totalAmount() {
    setQty(qty + 1);
  }

  

  return (
    <div>
       <Card className='card'>
       <div className="myCartTextBox"><span>My cart</span>
       
       <Card className='cardBody' style={{ width: "60%", margin: "1rem", padding: "2rem" }}>
       <img className="card-image" src= {Image}/> 
       <label className='label'><h4>Vahana Masterclass</h4>
       <label className='label1'>by ABC</label>
        <h5 class="card-desc"><b>RS.250 </b></h5>
        <div className='wrapper'>
        <span onClick={decrement}>-</span>
        <span >{1+ qty}</span>
        <span onClick={increment}>+</span>
        <Button variant="outlined">Remove</Button>
        </div>     
        </label>
    
       </Card>
       <Link to={'/customerdetails'}>
        <Button variant="contained" style={{ width:"20%", marginLeft: "700px", marginTop: "-200px" }}>PLACE ORDER</Button>
        </Link>
        </div>
       </Card>
      </div> 
  )
}
export default BookDetails;
