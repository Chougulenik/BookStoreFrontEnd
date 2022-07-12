import React, { useEffect, useState } from 'react'
import './Style.css';
import Menu from './Menu';
import MenuCard from './MenuCard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GetBooks from '../../Service/GetBooks';
import BookStoreService from '../../Service/BookStoreService';
import Header from './Navbar';
import Image from '../../../assest/book1.jpg';



export const Home = () => {

  // const [menuData, setMenuData] = useState(Menu);
  // console.log(menuData);

  const [books, setBooks] = useState([]);
  // console.log(setBooks);

  useEffect(() => {
    getBookList();
  }, [])


  const getBookList = () => {
    BookStoreService.getBooks().then((res) => {
      setBooks(res.data.data);
      console.log(res.data.data);
    })
   
  }

  return ( 
    <>
    
    <h1>Books</h1>
     <section className="main-card--cointainer">
          {
            books.map((curElem) => {
            return (
              <>
              <div className='book' key={curElem.id}>
              <Card sx={{ maxWidth: 300 }}>
            <Card style={{height:300, width:300}}>
            <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    width="40"
                    image={Image}/>
            </Card>
            
            <CardContent>
            
            {/* <Typography gutterBottom variant="h5" component="div">
            {curElem.bookName}
            </Typography> */}
           <div>
                <h4>{curElem.bookName}</h4>
                <Typography variant="body2" color="text.secondary">
                {curElem.authorName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {curElem.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {curElem.quantity}
                </Typography>
                </div>
                </CardContent>
                <CardActions className='button'>
                  <Button variant="contained" size="small" style={{backgroundColor:"#a03037"}}>ADD TO BAG</Button>
                  <Button variant="outlined" size="small" style={{borderColor:"#a03037"}}>WISHLIST</Button>
                </CardActions>
            

            </Card>
            </div> 
          </>
        )
      })
    }
   

    
    </section>
    </>
  )
}

export default Home;
