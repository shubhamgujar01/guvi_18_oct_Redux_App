import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [index, setIndex] = useState(null);

  const selectProduct = (index) => {
    setIndex(index);
  };

  return (
    <CartContext.Provider value={{ index, selectProduct }}>
      {children}
    </CartContext.Provider>
  );
}
