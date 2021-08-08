import { useState } from 'react';
import initialState from '../utils/initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (index) => {
    const newCart = state.cart;
    newCart.splice(index, 1);
    setState({
      ...state,
      cart: newCart,
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export { useInitialState };
