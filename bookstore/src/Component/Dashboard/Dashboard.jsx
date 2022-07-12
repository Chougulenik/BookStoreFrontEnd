import React from 'react'
import Navbar from './Navbar/Navbar';
import Home from './Navbar/Home';
import Footer from '../Footer/Footer';

export const Dashboard = () => {
  return (
    <>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer> 
    </>
  )
}

export default Dashboard;
