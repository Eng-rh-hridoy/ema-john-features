import React from 'react';

const Cart = (props) => {
    const Items = props.items;
    const total = Items.reduce((total, product)=> total + product.price, 0)

    let shipping = 0;
    if(total < 15){
        shipping = shipping + 0;
    }
    else if(total > 35){
        shipping = shipping + 12.99;
    }

    const tax = (total * 3) / 100;

    const orderTotal = total + shipping + tax;

    const FixNumber = (value) =>{
        return Number(value.toFixed(2));
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {Items.length}</p>
            <p>Item(s) Price: {FixNumber(total)}</p>
            <p>Shipping & Handling: {shipping}</p>
            <p>Tax: {FixNumber(tax)}</p>
            <h3>Order Total: {FixNumber(orderTotal)}</h3>
        </div>
    );
};

export default Cart;