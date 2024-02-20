
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Grid, Heading, Image, Text,ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import ProductCard from '../Components/ProductCard';

const ProductListByType = () => {
  //const { type } = useParams();
  const { farmerId, type } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/type/${type}`);
        //setProducts(response.data);
        setProducts(response.data.data || []);
        console.log(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [farmerId, type]);

  return (
    <ChakraProvider>
    <Box>
      <Heading size="lg" mb="4">{type}</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
          {products.map(product => (
            <ProductCard key={product._id} product={product} farmerId={farmerId}/> // Ensure each card has a unique key
          ))}
        </Grid>
    </Box>
    </ChakraProvider>
  );
};

export default ProductListByType;
