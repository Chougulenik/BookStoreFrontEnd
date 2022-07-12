import React from 'react'
import Header from '../Dashboard/Navbar/Navbar';
import BookDetails from './BookDetails';
import UserDetails from './UserDetails';
import OrderSummary from './OrderSummary';
import Footer from '../Footer/Footer';


export const Cart = () => {
  return (
    <div>
    <Header></Header>
    <BookDetails></BookDetails>
    <UserDetails></UserDetails> 
    <OrderSummary></OrderSummary>
    <Footer></Footer>
   
    </div>
  )
}
export default Cart;
