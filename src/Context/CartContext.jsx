import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const increment = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrement = (productId) => {
    setCartItems(prevItems => {
        const item = prevItems.find(item => item.id === productId);
        if (item.quantity === 1) {
        // Si solo queda uno, eliminar el producto del carrito
        return prevItems.filter(item => item.id !== productId);
        } else {
        // Si hay más de uno, disminuir cantidad
        return prevItems.map(item =>
            item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        }
    });
  };


  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
