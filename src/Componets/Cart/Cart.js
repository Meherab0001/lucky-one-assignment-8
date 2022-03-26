import React from 'react';

const Cart = ({cart}) => {

    let bname=''
  
    for(const product of cart){
  bname=bname+ product.name
       console.log(bname)
    

    }
    
    return (
        <div>
             <div className="btn-chose">
             <h3>Chose book list</h3>
            <p>{bname}</p>
               <button className='btn-1'>Chose 1 for read</button>
                <button className='btn-1'>Reset</button>
               </div>
        </div>
    );
};

export default Cart;