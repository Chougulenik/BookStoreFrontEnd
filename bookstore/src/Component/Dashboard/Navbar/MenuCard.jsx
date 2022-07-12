import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export const MenuCard = (props) => {
  //  console.log(menuData);

  const listenToBookFunction = (book)=>{
    props.listenToBookFunction(book)
} 
  return (
    <>
    
        {/* {menuData.map((curElem) => {
         return (
            const { id, image, bookName, authorName, price, quantity } = curElem;
               
            );
        })} */}
       
    </>
  )
}

