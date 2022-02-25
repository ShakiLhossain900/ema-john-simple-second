import React from 'react';

const ReviewIteam = (props) => {
    const {name,quantity} =props.product;
    const reviewIteamStyle={
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style ={reviewIteamStyle}>
           <h4 className="product-name">{name}</h4>
           <p>Quantity: {quantity}</p> 
           <br />
           <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewIteam;