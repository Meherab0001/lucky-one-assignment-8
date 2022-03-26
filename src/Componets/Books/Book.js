import React from 'react';
import './Book.css'

const Book = ({ handleToAddCart,book}) => {


    const{name,img,price,id}=book;
 
    return (
        <div className='book' >
        
               <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Price:{price}</p>
                <div className="book-btn">
                    <button onClick={()=> handleToAddCart(book)} className='btn'>Add to cart</button>
                    
                </div>
          
           
        </div>
    );
};

export default Book;