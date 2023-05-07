import React, { useContext } from "react";
import Button from "../button/button.componnet";
import CardItem from "../card-item/card-item.component";
import { CardContext } from "../../context/card.context";

const CardDropdown = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cardItems.map((item) => (
          <CardItem key={item.id} cardItem={item} />
        ))}
      </div>
      <Button buttonType="paymentButton">Payment</Button>
    </div>
  );
};

export default CardDropdown;
