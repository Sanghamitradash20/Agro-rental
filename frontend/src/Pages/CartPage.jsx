import React from 'react';
import { Box, Heading, Text, Button, Flex, Divider, Center } from '@chakra-ui/react';
import CartItem from '../Components/CartItems';
import { useCart } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, clearCartItems } = useCart();

  return (
    <Box p="20px" marginTop="300px">
      <Heading as="h1" fontSize="13px" color="#58595b" mt="4" mb="3">
        MY BAG - - - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - - - - PAYMENT
      </Heading>
      {cartItems.length === 0 ? (
        <Flex direction="column" align="center" justify="center" minHeight="100vh">
          <Divider />
          <Center mt="15px">
            <img src="https://tss-static-images.gumlet.io/emptyCart.png" alt="image" style={{ width: "120px" }} />
          </Center>
          <Heading as="h3" size="md" mt="2">
            Your shopping cart is empty.
          </Heading>
          <Heading as="h4" size="sm" color="#58595b" mt="2">
            Please add something soon, carts have feelings too.
          </Heading>

          <Box className="categories" backgroundColor="#f6f6ff" p="4" mt="4" borderRadius="md" maxWidth="500px">
            <Center>
              <Heading as="h4" mb="5px" pb="5px" fontSize="13px">
                Popular Categories
              </Heading>
            </Center>
            <div className="rowline1">
              {/* Rest of the buttons... */}
            </div>
            <div className="rowline">
              {/* Rest of the buttons... */}
            </div>
          </Box>

          <Box>
            <Link to="/">
              <Button
                className="continue"
                color="rgb(2, 136, 123)"
                mt="4"
                border="1.5px solid rgb(2, 136, 123)"
              >
                CONTINUE SHOPPING
              </Button>
            </Link>
          </Box>
        </Flex>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
          {/* Display the total sum here */}
          <Text>Total: $ {calculateTotalSum(cartItems).toFixed(2)}</Text>
          <div>
            <Button
              className="clear-cart-button"
              colorScheme="red"
              onClick={() => clearCartItems()}
              mt="4"
              mr="2"
            >
              CLEAR CART
            </Button>
            <Link to="/addnewaddress">
              <Button
                className="checkout-button"
                color="rgb(2, 136, 123)"
                mt="4"
                border="1.5px solid rgb(2, 136, 123)"
              >
                CHECKOUT
              </Button>
            </Link>
          </div>
        </>
      )}
    </Box>
  );
};

// Function to calculate the total sum of items in the cart
const calculateTotalSum = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
};

export default CartPage;
