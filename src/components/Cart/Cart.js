import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const shakil = props.cart;
    let total =0;
    for(let i=0; i<shakil.length; i++){
        const newthink = shakil[i];
        total = total + newthink.price;
    }
    let shipping =0
    if(total>15){
        shipping =4.99
    }
    else if(total>0){
        shipping =12.99
    }
    const tax = total/10;
    const formentNumber = num =>{
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {shakil.length}</p>
            <p>Total Price :{formentNumber(total)}</p>
            <p>Shipping Cost :{formentNumber(shipping)}</p>
            <p>total with tex : {formentNumber(tax+total)}</p>
            <p>Total with shipping : {formentNumber(total+shipping + tax)}</p>
          <br />
          <Link to="/review">
          <button className="main-button">Review Order</button>
          </Link>

        </div>
    );
};

export default Cart;