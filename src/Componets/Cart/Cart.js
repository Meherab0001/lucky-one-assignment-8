import React from 'react';
import './Cart.css'

const Cart = ({resetAll,cart}) => {
    const random=cart.length
    console.log(random)
  
  

    
    let bname=''


  
    for(const product of cart){
        bname=bname+ product.name
    
    
          }
       
        
    const choseOne=()=>{
        const randomNumber=Math.random().toFixed(1)*10
        console.log(randomNumber)
    }
    return (
        <div>
             <div className="btn-chose">
             <h3>Chose book list</h3>
              {/*    {
                     cart.map(book=>
                        <p key={book.id}>{book.name}</p>
                        )
                 }
             */}
             <div className='book-name'>{bname}</div>

                <button onClick={()=>choseOne()} className='btn-1'>Chose 1 for read</button>
                <button onClick={()=>resetAll()} className='btn-1'>Reset</button>
               </div>
        </div>
    );
};

export default Cart;