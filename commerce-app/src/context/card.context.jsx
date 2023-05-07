import { createContext, useEffect, useState } from "react";

const addCartItem = (cardItems, productTooAdd) => {
  const existing = cardItems.find(
    (cartItem) => cartItem.id === productTooAdd.id
  );

  if (existing) {
    return cardItems.map((cartItem) =>
      cartItem.id === productTooAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cardItems, { ...productTooAdd, quantity: 1 }];
};

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemCart: () => {},
  cardCount: 0,
});
export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    const newCardCount = cardItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    setCardCount(newCardCount);
  }, [cardItems]);

  const addItemCart = (productTooAdd) => {
    setCardItems(addCartItem(cardItems, productTooAdd));
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    cardItems,
    addItemCart,
    cardCount,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
