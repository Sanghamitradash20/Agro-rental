import React, { useEffect } from 'react';
import { Box, Heading, Button, Text, ChakraProvider } from '@chakra-ui/react';
import { useCart } from '../Contexts/CartProvider';
import CartItem from '../Components/CartItem';
import { useParams } from 'react-router-dom';

const CartPage = () => {
  const { farmerId } = useParams(); // Get farmerId from URL params
  const { cartItems, error, addToCart, getUserCart, removeFromCart, clearCart, getTotal } = useCart();

  useEffect(() => {
    getUserCart(farmerId); // Fetch user's cart when component mounts
  }, [farmerId, getUserCart]); // Dependencies array

  const handleClearCart = async () => {
    try {
      await clearCart(farmerId); // Call clearCart from context with farmerId
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <ChakraProvider>
      <Box>
        <Heading size="lg">Your Cart</Heading>
        {error && <Text color="red.500">{error}</Text>} {/* Display any errors */}
        {cartItems.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} /> // Use _id for key if it exists
            ))}
            <Text>Total: ${getTotal()}</Text>
            <Button colorScheme="red" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default CartPage;
