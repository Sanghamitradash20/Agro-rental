// import React from 'react';
// import { Box, Flex, Image, Text, Button,useBreakpointValue, ChakraProvider } from '@chakra-ui/react';
// // import { FaShoppingCart } from 'react-icons/fa';

// const ProductCard = ({ product }) => {
//   const handleBuyNow = () => {
//     // Logic for Buy Now action
//     console.log(`Buy Now clicked for ${product.name}`);
//   };
//   // const responsiveButtonWidth = useBreakpointValue({ base: "100px", sm: "200px", md: "100px" })

//   return (
//     <ChakraProvider>
//     <Box
//       maxW="sm"
//       borderWidth="10px"
//       borderRadius="lg"
//       overflow="hidden"
//       boxShadow="md"
//     >
//       <Image src={product.image} alt={product.name} />

//       <Box p="6">
//         <Box d="flex" alignItems="baseline">
//           <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
//             {product.category}
//           </Text>
//         </Box>

//         <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
//           {product.name}
//         </Box>

//         <Box>
//           ${product.price}
//           <Box as="span" color="gray.600" fontSize="sm">
//             {' '}
//             / {product.unit}
//           </Box>
//         </Box>

//         <Flex mt="2" justify="space-between" align="center">
//           <Button onClick={handleBuyNow} colorScheme="green">
//             Rent now
//           </Button>
//         </Flex>
//       </Box>
//     </Box>
//     </ChakraProvider>
//   );
// };
// export default ProductCard;

import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react'; // Import necessary Chakra UI components
import { Link } from 'react-router-dom';
const ProductCard = ({ product , farmerId }) => {
  console.log(product)
  return (
    <Link to={`/farmer/products/${farmerId}/${product.type}/${product._id}`} style={{ textDecoration: 'none' }}>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      {/* Display product image */}
      <Image src={product.imageUrl} alt={product.brand} />

      {/* Display product details */}
      <Box mt="3">
        <Text fontWeight="semibold" fontSize="lg" lineHeight="tight">
          {product.brand} - {product.model}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Type: {product.type}
        </Text>
        {/* <Text fontSize="sm" color="gray.500">
          Description: {product.description}
        </Text> */}
        <Text fontSize="lg" fontWeight="bold" mt="2">
          Price: ${product.price}
        </Text>

        {/* Add buttons for "Add to Cart" and "Rent Now" */}
        <Button mt="3" colorScheme="blue" mr="2">Add to Cart</Button>
        <Button mt="3" colorScheme="green">Rent Now</Button>
      </Box>
    </Box>
    </Link>
  );
};

export default ProductCard;
