import React, { useContext } from "react";
import Button from "../button/button.componnet";
import CardItem from "../card-item/card-item.component";
import { CardContext } from "../../context/card.context";
import { useNavigate } from "react-router";

const CardDropdown = () => {
  const { cardItems } = useContext(CardContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cardItems.map((item) => (
          <CardItem key={item.id} cardItem={item} />
        ))}
      </div>
      <Button buttonType="paymentButton" onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CardDropdown;
