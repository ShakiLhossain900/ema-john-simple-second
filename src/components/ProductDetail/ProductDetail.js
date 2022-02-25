import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()
    const product= fakeData.find(pd=>pd.key === productKey)
    return (
        <div>
            <h1>Your product details</h1>
            <Product showAddToCart ={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;