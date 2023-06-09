import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/card.context";

const CheckoutItem = ({ item }) => {
  const { addItemCart, removeItemCart, clearItemFromCard } =
    useContext(CardContext);

  const { imageUrl, name, quantity, price } = item;

  const [totalItemCost, setTotalItemCost] = useState(price * quantity);

  useEffect(() => {
    setTotalItemCost(price * quantity);
  }, [quantity]);


  const clearItemHandler = () => clearItemFromCard(item);


  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container col-md-4">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-md-3">
          <h2 className="name">{name}</h2>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <i
            onClick={() => removeItemCart(item)}
            className="fa-solid fa-angle-left"
          ></i>
          <span>{quantity}</span>
          <i
            onClick={() => addItemCart(item)}
            className="fa-solid fa-angle-right"
          ></i>
        </div>
        <div className="col-md-2">
          <h5>{totalItemCost}</h5>
        </div>
        <div className="col-md-1">
          <i className="fas fa-xmark" onClick={clearItemHandler}></i>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
