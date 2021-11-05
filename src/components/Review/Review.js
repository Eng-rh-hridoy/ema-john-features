import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItems/ReviewItem';
import Cart from '../Cart/Cart';
import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([]);
    // const [placeOrder, setPlaceOrder] = useState([]);

    const HandlePlaceOrder = () =>{
        setCart([]);
        processOrder(cart);
    }
    // review order 
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(item => item.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct);
    }, [])

    const RemoveItem = (productKey) => {
        const newReview = cart.filter(item => item.key !== productKey);
        setCart(newReview);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className="review-container">
            <div className="product-container">
                <h2>Total items to review: {cart.length}</h2>
                {
                    cart.map(reviewProduct => <ReviewItem RemoveItem={RemoveItem} selectedItems={reviewProduct} key={reviewProduct.key} />)
                }
            </div>
            <div className="cart-container">
                <Cart items={cart}>
                        <button onClick={HandlePlaceOrder} className="review-order-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;