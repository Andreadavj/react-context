// src/contexts/cartContext.js
import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };