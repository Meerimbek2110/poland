import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => setCartItems((prev) => [...prev, item]);
  const removeFromCart = (id) => setCartItems((prev) => prev.filter(el => el.id !== id));
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// ✅ хук, ошондо useContext колдонуунун кереги жок
export const useCart = () => useContext(CartContext);
