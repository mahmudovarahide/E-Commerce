import React from "react";

const CardItem = ({ cardItem }) => {
  const { name, imgUrl, price, quantity } = cardItem;
  return (
    <div className="cart-item-container">
      <img src={imgUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CardItem;
