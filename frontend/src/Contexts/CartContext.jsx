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






import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Create CartContext
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  // Function to add item to cart
  const addToCart = async (productId, vendorId, farmerId, quantity) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart', { productId, vendorId, farmerId, quantity });
      setCartItems(response.data.data); // Update cart items after adding
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  // Function to get user's cart
  const getUserCart = async (farmerId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cart/user/${farmerId}`);
      setCartItems(response.data.data); // Update cart items
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  // Function to remove item from cart
  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`);
      setCartItems(cartItems.filter(item => item._id !== itemId)); // Remove item from cart items
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  // Function to clear user's cart
  const clearCart = async (farmerId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/clear/${farmerId}`);
      setCartItems([]); // Clear cart items
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, error, addToCart, getUserCart, removeFromCart, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
