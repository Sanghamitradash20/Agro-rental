import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import { Box, Heading, Image, Text, Button,ChakraProvider,Flex} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import axios from 'axios';

const ProductDetails = () => {
  const { farmerId,type,id } = useParams();
  // const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/${id}`);
        setProduct(response.data.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart', {
        productId: product._id,
        vendorId: product.vendorId,
        farmerId: farmerId,
        quantity: 1, // Assuming you're adding only one item to the cart
      });
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ChakraProvider>
      <Box>
      <Flex alignItems="center" mb="4">
        <Link to={`/farmer/products/${farmerId}/${type}`} style={{ textDecoration: 'none' }}>
          <Button leftIcon={<ArrowBackIcon />} colorScheme="blue" variant="outline">
            Back
          </Button>
        </Link>
        <Heading size="lg" ml="4">{product.name}</Heading>
      </Flex>
    <Box>
      {product && (
        <>
          <Heading size="lg">{product.brand}</Heading>
            <Image src={product.imageUrl} alt={product.brand} />
            <Text>Description: {product.description}</Text>
            <Text>Price: ₹{product.price}</Text>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </>
      )}
      <Link to={`/cart/${farmerId}`}>Go to Cart</Link>
    </Box>
    </Box>
    </ChakraProvider>
  );
};

export default ProductDetails;

