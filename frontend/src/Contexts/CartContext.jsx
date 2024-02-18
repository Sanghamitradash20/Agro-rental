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

// import React, { createContext, useState, useContext } from 'react';

//  const CartContext = createContext();
// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
  
//     const addToCart = (product, quantity) => {
//       const existingItem = cartItems.find((item) => item.product.id === product.id);
  
//       if (existingItem) {
//         // If the product already exists in the cart, alert the user or handle it accordingly
//         alert('This product is already in the cart.');
//       } else {
//         // If the product does not exist in the cart, add it with the specified quantity
//         setCartItems([...cartItems, { product, quantity }]);
//       }
//     };
  
//     const removeFromCart = (product) => {
//       const updatedCartItems = cartItems.filter((item) => item.product.id !== product.id);
//       setCartItems(updatedCartItems);
//     };
  
//     const clearCartItems = () => {
//       setCartItems([]);
//     };
  
//     return (
//       <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCartItems }}>
//         {children}
//       </CartContext.Provider>
//     );
//   };
//   export const useCart = () => {
//        return useContext(CartContext);
//      };
  


// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   console.log('Cart Items:', cartItems);


//   const addToCart = (product,quantity) => {
//     // Check if the product already exists in the cart
//     console.log('Adding to cart:', product, 'Quantity:', quantity);
//     const existingItemIndex = cartItems.find((item) => item.product.id === product.id);

//     if (existingItemIndex !== -1) {
//       // If the product exists, do not add it again
//       console.log("Product already exists in the cart");
//       return;
//     }

//     // Add the product to the cart
//     setCartItems([...cartItems, { product, quantity: 1 }]);
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


import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        console.log("Product already exists in the cart");
        return prevCartItems; // Return the unchanged cart items
      }

      // Add the product to the cart
      return [...prevCartItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.filter(item => item.product.id !== product.id);
      return updatedCartItems;
    });
  };

  const clearCartItems = () => {
    setCartItems([]);
  };

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]); // Log cartItems whenever it changes

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCartItems }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};










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
//       await axios.delete(`/api/cart/remove/${productId}`);
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
