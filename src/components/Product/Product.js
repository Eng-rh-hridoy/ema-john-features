import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className= "product">
            <div className= "product-img">
                <img src={img} alt="" srcset="" />
            </div>
            <div className ="product-description">
                <h4 className ="product-title">{name}</h4>
                <p><small>by: {seller}</small></p>
                <br />
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick = {() => props.handleAddToCart(props.product)} className ="addToCartBtn">
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>
            </div>   
        </div>
    );
};

export default Product;