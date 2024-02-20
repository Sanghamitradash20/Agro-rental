
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

  const getUserCart = async (farmerId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cart/user/${farmerId}`);
      setCartItems(response.data.item); // Update cart items
      // console.log(response.data.data)
      console.log(farmerId)
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response was received from the server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error setting up the request.');
      }
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
