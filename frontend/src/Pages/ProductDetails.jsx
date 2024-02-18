import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { Box, Heading, Image, Text ,Button,Flex} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
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
    console.log('Product to be added to cart:', product); 
    // Show an alert that the item has been added to the cart
    alert('Item added to cart!');
  };

  return (
    <Box>
      <Flex alignItems="center" mb="4">
        <Link to={`/${product.type}`} style={{ textDecoration: 'none' }}>
          <Button leftIcon={<ArrowBackIcon />} colorScheme="blue" variant="outline">
            Back
          </Button>
        </Link>
        <Heading size="lg" ml="4">{product.name}</Heading>
      </Flex>
      
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
          <Link to="/cart">Go to Cart</Link>
    </Box>
  );
};

export default ProductDetails;



// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useHistory } from 'react-router-dom';
// import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
// import axios from 'axios';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(`/api/product/${id}`);
//         setProduct(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   const handleAddToCart = async () => {
//     try {
//       const response = await axios.post('/api/cart/add', {
//         productId: id,
//         quantity: 1,
//       });
//       alert('Item added to cart!');
//       history.push('/cart'); // Redirect to cart page
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <Box>
//       {product && (
//         <>
//           <Heading size="lg">{product.name}</Heading>
//           <Image src={product.image} alt={product.name} />
//           <Text>Description: {product.description}</Text>
//           <Text>Price: ₹{product.price}</Text>
//           <Button onClick={handleAddToCart}>Add to Cart</Button>
//         </>
//       )}
//       <Link to="/cart">Go to Cart</Link>
//     </Box>
//   );
// };

// export default ProductDetails;

