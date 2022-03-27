import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';
import Cart from '../Cart/Cart';
import './Booklist.css'


const Booklist = () => {
    const [books,setBooks]=useState([])
    const [cart,setCart]=useState([])
    const [chsoe,setChose]=useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[])

   
    const handleToAddCart =(books)=>{
      
        let newCart=[];
        const exists=cart.find(book=>book.id==books.id)
        if(exists){
            
            alert('already select')
        }
        else{
            newCart=[...cart,books]
           
    
        }
      
        if(cart.length ===4){
            alert('can not select than more 4')
        }
        else{
            newCart=[...cart,books]
        }
      
       
       
       
        
             
        

      setCart(newCart)
   
       
    }
           

    const choseOne=()=>{
        
        
        const chose=cart[Math.floor(Math.random() * cart.length)]
    
      
        setChose(chose)
        let newCart=[]
        setCart(newCart)

   
      
       
      
    }

    const resetAll=()=>{
        let newCart=[]
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
                chsoe={chsoe}
              choseOne={choseOne}
                resetAll={resetAll}
                cart={cart}
              
                
                ></Cart>
                
        
              
            </div>
        </div>
    );
};

export default Booklist;