import React, { useState , useEffect} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/products.json'
import ReviewIteam from '../../ReviewIteam/ReviewIteam';

const Review = () => {
    const [ cart, setCart]  =useState([])
    useEffect(() => {
      const saveCart = getDatabaseCart()
      const productKey = Object.keys(saveCart)
      const cartProducts = productKey.map(key => { 
          const product = fakeData.find(pd => pd.key === key)
          product.quantity = saveCart[key];
         return product
      })
      setCart(cartProducts)
    },[])
    return (
        <div>
            <h1>Cart Iteams : {cart.length}</h1>
            {
                cart.map(pd => <ReviewIteam
                    key ={pd.key}
                    product={pd}></ReviewIteam>)
            }
        </div>
    );
};

export default Review;