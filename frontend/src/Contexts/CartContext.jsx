// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product, quantity) => {
//     const existingItemIndex = cartItems.findIndex((item) => item.product.id === product.id);

//     if (existingItemIndex !== -1) {
//       // If the product already exists in the cart, update its quantity
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex] = { product, quantity };
//       setCartItems(updatedCartItems);
//     } else {
//       // If the product does not exist in the cart, add it
//       setCartItems([...cartItems, { product, quantity }]);
//     }
//   };

//   const removeFromCart = (product) => {
//     const updatedCartItems = cartItems.filter((item) => item.product.id !== product.id);
//     setCartItems(updatedCartItems);
//   };

//   const clearCartItems = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

import React, { createContext, useState, useContext } from 'react';

 const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product, quantity) => {
      const existingItem = cartItems.find((item) => item.product.id === product.id);
  
      if (existingItem) {
        // If the product already exists in the cart, alert the user or handle it accordingly
        alert('This product is already in the cart.');
      } else {
        // If the product does not exist in the cart, add it with the specified quantity
        setCartItems([...cartItems, { product, quantity }]);
      }
    };
  
    const removeFromCart = (product) => {
      const updatedCartItems = cartItems.filter((item) => item.product.id !== product.id);
      setCartItems(updatedCartItems);
    };
  
    const clearCartItems = () => {
      setCartItems([]);
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCartItems }}>
        {children}
      </CartContext.Provider>
    );
  };
  export const useCart = () => {
       return useContext(CartContext);
     };
  