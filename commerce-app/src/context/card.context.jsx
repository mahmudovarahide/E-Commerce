import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducers/reducer.utils";

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
    const action = createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, {
      isCardOpen: isOpen,
    });
    dispatch(action);
  };

  const addItemCart = (productToAdd) => {
    const action = createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, {
      cardItems: addCartItem(cardItems, productToAdd),
    });
    dispatch(action);
  };

  const removeItemCart = (removeDecrementItem) => {
    const action = createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, {
      cardItems: removeCardItem(cardItems, removeDecrementItem),
    });
    dispatch(action);
  };

  const clearItemFromCard = (cardItemToClear) => {
    const action = createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, {
      cardItems: clearItem(cardItems, cardItemToClear),
    });
    dispatch(action);
  };

  useEffect(() => {
    const newTotal = cardItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.price * cartItem.quantity,
      0
    );
    const action = createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS,  { total: newTotal });
    dispatch(action);
  }, [cardItems]);

  useEffect(() => {
    const newCardCount = cardItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const action = createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, { cardCount: newCardCount });
    dispatch(action);
  }, [cardItems]);

  useEffect(() => {
    const newItemCount = cardItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const action = createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, { itemCount: newItemCount });
    dispatch(action);
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
