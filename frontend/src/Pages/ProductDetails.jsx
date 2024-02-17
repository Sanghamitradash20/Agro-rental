import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text ,Button} from '@chakra-ui/react';
import data from '../db.json';
import {useCart} from '../Contexts/CartContext'; 

const ProductDetails = () => {
  const { id } = useParams(); 
  const { addToCart } = useCart();

  // Find the product with the matching id
  const product = data.products.find(product => product.id === parseInt(id));

  if (!product) {
    return <Box>Error: Product not found</Box>;
  }
  const handleAddToCart = () => {
    addToCart(product, 1);
    // Show an alert that the item has been added to the cart
    alert('Item added to cart!');
  };

  return (
    <Box>
      <Heading size="lg" mb="4">{product.name}</Heading>
      <Box maxW="400px">
        <Image src={product.image} alt={product.name} height="300px" objectFit="cover" mb="4" />
        <Box>
          <Text fontSize="lg" fontWeight="bold">Price: ₹{product.price}</Text>
          <Text mt="2">{product.description}</Text>
          <Text mt="4" fontSize="sm">Model: {product.model}</Text>
        </Box>
      </Box>
      <Button colorScheme="blue" onClick={handleAddToCart} mr="10px">
            Add to Cart
          </Button>
    </Box>
  );
};

export default ProductDetails;
