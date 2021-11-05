import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(item => item.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct);
    }, [])

    const handleAddToCart =(product)=>{
        const productKey = product.key;
        const sameProduct = cart.find(sameProduct => sameProduct.key === productKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProduct = cart.filter(cartProduct => cartProduct.key !== sameProduct.key);
            newCart = [...otherProduct, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        addToDatabaseCart(productKey, count);
        setCart(newCart);
    }

    return (
        <div className = "shop-container">
            <div className = "product-container">
                    {
                        products.map(product => <Product key = {product.key} product = {product} handleAddToCart = {handleAddToCart}></Product>)
                    }
            </div>
            <div className= "cart-container">
                <Cart items = {cart}>
                    <Link to ="/review">
                        <button className="review-order-btn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;