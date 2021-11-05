import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, price, img, quantity, key } = props.selectedItems;
    return (
        <div className="reviewItem-container">
            <div className="item-img">
                <img src={img} alt="" />
            </div>
            <div className="item-description">
                <h4 className="item-title">{name}</h4>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick = {()=>props.RemoveItem(key)} className ="remove-item">Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;