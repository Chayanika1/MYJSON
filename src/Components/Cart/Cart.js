import React from 'react';

const Cart = (props) => {
    const{cart}=props
    return (
        <div>
            <h4>products length : {cart.length}</h4>
            
        </div>
    );
};

export default Cart;