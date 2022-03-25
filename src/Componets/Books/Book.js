import React from 'react';
import './Book.css'

const Book = (prpos) => {
    const{name,img,price}=prpos.book;
 
    return (
        <div className='book' >
        
               <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Price:${price}</p>
                <div className="book-btn">
                    <button>Add to cart</button>
                    
                </div>
          
           
        </div>
    );
};

export default Book;