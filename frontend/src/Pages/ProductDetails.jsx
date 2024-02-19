import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  // const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/product/${id}`);
        setProduct(response.data);
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
      const response = await axios.post('/api/cart/add', {
        productId: id,
        quantity: 1,
      });
      alert('Item added to cart!');
      // history.push('/cart'); // Redirect to cart page
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
    <Box>
      {product && (
        <>
          <Heading size="lg">{product.name}</Heading>
          <Image src={product.image} alt={product.name} />
          <Text>Description: {product.description}</Text>
          <Text>Price: ₹{product.price}</Text>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </>
      )}
      <Link to="/cart">Go to Cart</Link>
    </Box>
  );
};

export default ProductDetails;

