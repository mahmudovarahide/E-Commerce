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
const removeCardItem = (cardItems, removeDecrementItem) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === removeDecrementItem.id
  );
  if (existingCardItem.quantity === 1) {
    return cardItems.filter(
      (cardItem) => cardItem.id !== removeDecrementItem.id
    );
  }
  return cardItems.map((cardItem) =>
    cardItem.id === removeDecrementItem.id
      ? { ...cardItem, quantity: cardItem.quantity - 1 }
      : cardItem
  );
};
export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemCart: () => {},
  removeCardItem: () => {},
  clearItemFromCard:()=>{},
  cardCount: 0,
});
const clearItem =(cardItems,cardItemToClear)=>{
  return cardItems.filter(
    (cardItem) => cardItem.id !== cardItemToClear.id
  );
}
export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);
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

  const removeItemCart = (removeDecrementItem) => {
    setCardItems(removeCardItem(cardItems, removeDecrementItem));
  };
  const clearItemFromCard = (cardItemToClear) => {
    setCardItems(clearItem(cardItems, cardItemToClear));
  };

  //quantity uygun total price artir
  useEffect(() => {
    const newTotal = cardItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.price * cartItem.quantity,
      0
    );
    setTotal(newTotal);
  }, [cardItems]);
  

  const value = {
    isCardOpen,
    setIsCardOpen,
    cardItems,
    addItemCart,
    cardCount,
    removeItemCart,
    total,
    clearItemFromCard,
    itemCount,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
