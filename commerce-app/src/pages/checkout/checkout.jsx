import React, { useContext } from "react";
import { CardContext } from "../../context/card.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";

const Checkout = () => {
  const { cardItems ,total} = useContext(CardContext);
  return (
    <div className="checkout-container">
              <h4 className="fw-bold">Checkout</h4>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Name</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
      {cardItems.map((item) => {
        return (
            <CheckoutItem key={item.id} item={item}/>
        );
      })}
            <div className="d-flex">
        <h5 className="mt-5 fw-bold">
          Total : <span>{total} AZN </span>
        </h5>
      </div>
    </div>
  );
};

export default Checkout;
