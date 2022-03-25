import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';
import './Booklist.css'


const Booklist = () => {
    const [books,setBooks]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[])
    return (
        <div className='book-shop'>
           
        <div className="book-list">
        {
                books.map(book=> <Book
                    key={book.id}
                    book={book}></Book>)
            }
        </div>
        <div className="book-cart">
            <p>Chose your favourite book</p>
        </div>
        </div>
    );
};

export default Booklist;