import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';
import Cart from '../Cart/Cart';
import './Booklist.css'


const Booklist = () => {
    const [books,setBooks]=useState([])
    const [cart,setCart]=useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[])


    const handleToAddCart =(books)=>{
       
        let newCart=[];
        newCart=[...cart,books]
       
        setCart(newCart)
      
       
    }
    return (
        <div className='book-shop'>
        
           
            <div className="book-list">
            {
                    books.map(book=> <Book
                        handleToAddCart={ handleToAddCart}
                        key={book.id}
                        book={book}></Book>)
                }
            </div>
            <div className="book-cart">
                <Cart 
                cart={cart}
              
                
                ></Cart>
                
        
              
            </div>
        </div>
    );
};

export default Booklist;