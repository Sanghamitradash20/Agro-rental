import React from 'react';
import { Box, Flex, Image, Text, Button,useBreakpointValue, ChakraProvider } from '@chakra-ui/react';
// import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const handleBuyNow = () => {
    // Logic for Buy Now action
    console.log(`Buy Now clicked for ${product.name}`);
  };
  // const responsiveButtonWidth = useBreakpointValue({ base: "100px", sm: "200px", md: "100px" })

  return (
    <ChakraProvider>
    <Box
      maxW="sm"
      borderWidth="10px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={product.image} alt={product.name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
            {product.category}
          </Text>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.name}
        </Box>

        <Box>
          ${product.price}
          <Box as="span" color="gray.600" fontSize="sm">
            {' '}
            / {product.unit}
          </Box>
        </Box>

        <Flex mt="2" justify="space-between" align="center">
          <Button onClick={handleBuyNow} colorScheme="green">
            Rent now
          </Button>
        </Flex>
      </Box>
    </Box>
    </ChakraProvider>
  );
};
export default ProductCard;