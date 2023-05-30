import { createContext, useEffect, useReducer } from "react";

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
const clearItem = (cardItems, cardItemToClear) => {
  return cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);
};

const INITIAL_STATE = {
  isCardOpen: false,
  cardItems: [],
  cardCount: 0,
  total: 0,
  itemCount: 0,
};
export const CardContext = createContext(INITIAL_STATE);

export const CARD_ACTION_TYPES = {
  SET_CARD_ITEMS: "SET_CARD_ITEMS",
};

const cardReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CARD_ACTION_TYPES.SET_CARD_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in card Reducer`);
  }
};

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);

  const { isCardOpen, cardItems, cardCount, total, itemCount } = state;

  const setIsCardOpen = (isOpen) => {
    dispatch({
      type: CARD_ACTION_TYPES.SET_CARD_ITEMS,
      payload: { isCardOpen: isOpen },
    });
  };

  const addItemCart = (productTooAdd) => {
    dispatch({
      type: CARD_ACTION_TYPES.SET_CARD_ITEMS,
      payload: { cardItems: addCartItem(cardItems, productTooAdd) },
    });
  };

  const removeItemCart = (removeDecrementItem) => {
    dispatch({
      type: CARD_ACTION_TYPES.SET_CARD_ITEMS,
      payload: { cardItems: removeCardItem(cardItems, removeDecrementItem) },
    });
  };

  const clearItemFromCard = (cardItemToClear) => {
    dispatch({
      type: CARD_ACTION_TYPES.SET_CARD_ITEMS,
      payload: { cardItems: clearItem(cardItems, cardItemToClear) },
    });
  };

  useEffect(() => {
    const newTotal = cardItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.price * cartItem.quantity,
      0
    );
    dispatch({
      type: CARD_ACTION_TYPES.SET_CARD_ITEMS,
      payload: { total: newTotal },
    });
  }, [cardItems]);

  useEffect(() => {
    const newCardCount = cardItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch({
      type: CARD_ACTION_TYPES.SET_CARD_ITEMS,
      payload: { cardCount: newCardCount },
    });
  }, [cardItems]);

  useEffect(() => {
    const newItemCount = cardItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch({
      type: CARD_ACTION_TYPES.SET_CARD_ITEMS,
      payload: { itemCount: newItemCount },
    });
  }, [cardItems]);


  const cartContextValue = {
    isCardOpen,
    setIsCardOpen,
    cardItems,
    addItemCart,
    removeItemCart,
    clearItemFromCard,
    cardCount,
    total,
    itemCount,
  };
  return (
    <CardContext.Provider value={cartContextValue}>
      {children}
    </CardContext.Provider>
  );
};
