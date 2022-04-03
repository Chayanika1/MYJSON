import React, { useState } from 'react';
import Cart from '../Cart/Cart';

const Order = () => {
   const[cart,setCart] =useState([])
    return (
        <div>
            <h3>this is order page</h3>
            <Cart cart={cart}></Cart>
            
        </div>
    );
};

export default Order;