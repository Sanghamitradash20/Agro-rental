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
import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useCart } from '../Contexts/CartContext';

const CartItem = ({ item }) => {
  const { product, quantity } = item;
  const { removeFromCart } = useCart();
  console.log("Items",item)

  const handleRemoveItem = () => {
    removeFromCart(product);
  };

  return (
    <Box display="flex" alignItems="center" mb="20px">
      <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" mr="10px" />
      <Box flex="1">
        <Text fontSize="lg" fontWeight="bold">
          {product.name}
        </Text>
        <Text fontSize="md" color="gray.600">
          ${product.price} each
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        <Text mx="8px">{quantity}</Text>
        <Button size="sm" variant="outline" colorScheme="red" onClick={handleRemoveItem}>
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;

