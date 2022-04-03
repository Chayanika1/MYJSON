import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { showStorage, storeProduct } from '../Storage/Storage';
import './Shop.css'

const Shop = () => {
    const [shop,setShop]=useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(response=>response.json())
        .then(data=>setShop(data))
    },[])
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        const storedProductsId = showStorage();
        const previousCart =[];
        for(const id in storedProductsId){
            const foundProduct = shop.find(product=>product.id === id);
            if(foundProduct){
                const quantity = storedProductsId[id];
                foundProduct.quantity = quantity
                previousCart.push(foundProduct);
            
            }

        }
        setCart(previousCart);
    }, [shop])

     
      const addToCart=(product)=>{
          // const myCart = [...cart,product]
          // setCart(myCart);
           let newCart = [];
           const exist = cart.find((p)=>p.id===product.id);
             if(!exist){
                product.quantity=1;
                newCart=[...cart,product];
             }
                else{
                    const rest =cart.filter((p)=>p.id!==product.id);
                    exist.quantity +=1;
                    newCart =[...rest,exist]
                }
                setCart(newCart);

           
           storeProduct(product.id);
      }
        
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                shop.map(item=><Products item={item} addToCart={addToCart}></Products>)
            }

            </div>
             <div className='cart-container'>
                 <h1>this is cart</h1>
                 <Cart cart={cart}></Cart>

             </div>
            
            
        </div>
    );
};

export default Shop;