// // CartItem.js

// import React, { useContext } from 'react';
// import { Box, Image, Text, Button } from '@chakra-ui/react';
// import { useCart } from '../Contexts/CartContext';

// const CartItem = ({ item }) => {
//   const { product, quantity } = item;
//   const { addToCart, removeFromCart } = useCart();

//   const handleQuantityChange = (newQuantity) => {
//     addToCart(product, newQuantity);
//   };

//   const handleRemoveItem = () => {
//     removeFromCart(product);
//   };

//   return (
//     <Box display="flex" alignItems="center" mb="20px">
//       <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" mr="10px" />
//       <Box flex="1">
//         <Text fontSize="lg" fontWeight="bold">
//           {product.name}
//         </Text>
//         <Text fontSize="md" color="gray.600">
//           ${product.price} each
//         </Text>
//       </Box>
//       <Box display="flex" alignItems="center">
//         <Button
//           size="sm"
//           variant="outline"
//           colorScheme="blue"
//           onClick={() => handleQuantityChange(quantity - 1)}
//           disabled={quantity === 1}
//         >
//           -
//         </Button>
//         <Text mx="8px">{quantity}</Text>
//         <Button size="sm" variant="outline" colorScheme="blue" onClick={() => handleQuantityChange(quantity + 1)}>
//           +
//         </Button>
//         <Button size="sm" variant="outline" colorScheme="red" onClick={handleRemoveItem}>
//           Remove
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CartItem;




// import React from 'react';
// import { Box, Image, Text, Button } from '@chakra-ui/react';
// import { useCart } from '../Contexts/CartContext';

// const CartItem = ({ item }) => {
//   const { product, quantity } = item;
//   const { removeFromCart } = useCart();

//   const handleRemoveItem = () => {
//     removeFromCart(product);
//   };

//   return (
//     <Box display="flex" alignItems="center" mb="20px">
//       <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" mr="10px" />
//       <Box flex="1">
//         <Text fontSize="lg" fontWeight="bold">
//           {product.name}
//         </Text>
//         <Text fontSize="md" color="gray.600">
//           ${product.price} each
//         </Text>
//       </Box>
//       <Box display="flex" alignItems="center">
//         <Text mx="8px">{quantity}</Text>
//         <Button size="sm" variant="outline" colorScheme="red" onClick={handleRemoveItem}>
//           Remove
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CartItem;

// CartItem.js
// import React from 'react';
// import { Box, Image, Text, Button ,ChakraProvider} from '@chakra-ui/react';
// import { useCart } from '../Contexts/CartContext';

// const CartItem = ({ item }) => {
//   const { product, quantity } = item;
//   const { removeFromCart } = useCart();
//   console.log("Items",item)

//   const handleRemoveItem = () => {
//     removeFromCart(product);
//   };

//   return (
//     <ChakraProvider>
//     <Box display="flex" alignItems="center" mb="20px">
//       <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" mr="10px" />
//       <Box flex="1">
//         <Text fontSize="lg" fontWeight="bold">
//           {product.name}
//         </Text>
//         <Text fontSize="md" color="gray.600">
//           ${product.price} each
//         </Text>
//       </Box>
//       <Box display="flex" alignItems="center">
//         <Text mx="8px">{quantity}</Text>
//         <Button size="sm" variant="outline" colorScheme="red" onClick={handleRemoveItem}>
//           Remove
//         </Button>
//       </Box>
//     </Box>
//     </ChakraProvider>
//   );
// };

// export default CartItem;




















import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react'; // Import necessary Chakra UI components
import { useCart } from '../Contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(item._id);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" mb="4">
      {/* Display product image */}
      <Image src={item.imageUrl} alt={item.brand} />

      {/* Display product details */}
      <Box mt="3">
        <Text fontWeight="semibold" fontSize="lg" lineHeight="tight">
          {item.brand} - {item.model}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Type: {item.type}
        </Text>
        <Text fontSize="lg" fontWeight="bold" mt="2">
          Price: ${item.price}
        </Text>

        {/* Add button to remove item from cart */}
        <Button mt="3" colorScheme="red" onClick={handleRemoveFromCart}>Remove from Cart</Button>
      </Box>
    </Box>
  );
};

export default CartItem;


