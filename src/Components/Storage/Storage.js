const storeProduct=(id)=>{
    const cart = localStorage.getItem('shopping-cart') || '{}';
    const newCart = JSON.parse(cart);
    if(newCart[id]){
        newCart[id] +=1
    }
    else{
        newCart[id]=1;
    }
     localStorage.setItem('shopping-cart',JSON.stringify(newCart))
}
  const showStorage=()=>{
      let newCart = {};
      const cart = localStorage.getItem('shopping-cart');
      if(cart){
          newCart = JSON.parse(cart);
      }
       return newCart;
  }

 export{storeProduct,
     showStorage



}