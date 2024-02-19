// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// // Create a new context for the cart
// const CartContext = createContext();

// // Custom hook to use the cart context
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // CartProvider component to wrap your application with the cart context
// export const CartProvider = ({ children }) => {
//   // State to manage the cart items
//   const [cartItems, setCartItems] = useState([]);

//   // Function to fetch cart items from the server
//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('/api/cart');
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   // Fetch cart items when the component mounts
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   // Function to add an item to the cart
//   const addToCart = async (product, quantity) => {
//     try {
//       await axios.post('/api/cart/add', { product, quantity });
//       // Refresh cart items after adding
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//     }
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = async (productId) => {
//     try {
//       await axios.delete(/api/cart/remove/${productId});
//       // Refresh cart items after removing
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   // Function to clear all items from the cart
//   const clearCart = async () => {
//     try {
//       await axios.delete('/api/cart/clear');
//       // Refresh cart items after clearing
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error clearing cart:', error);
//     }
//   };

//   // Value to be provided by the context
//   const value = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     clearCart
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };