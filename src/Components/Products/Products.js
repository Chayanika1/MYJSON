import React from 'react';
import './Products.css'

const Products = (props) => {
    const{name,img}=props.item;
    const{addToCart}=props
    return (
        <div className='details'>
            <img src={img} alt=""/>
            <h3>name: {name}</h3>
            <button onClick={()=>addToCart(props.item)}>click me</button>
            
        </div>
    );
};

export default Products;