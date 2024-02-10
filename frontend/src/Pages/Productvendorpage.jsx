import React from "react";
import { Box, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const navigate = useNavigate();
  const userDetails = {
    name: "NANDU",
    email: "NANDU@example.com",
    address: "123 Main Street, City",
    phoneNumber: "123-456-7890",
  };
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
    { id: 4, name: "Product 4", price: "$40" },
    { id: 5, name: "Product 5", price: "$50" },
    { id: 6, name: "Product 6", price: "$60" },
  ];

  return (
    <Stack direction="row" spacing={8} width="100%">
      <Box
        width="20%"
        p={4}
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="md"
      >
        <Heading size="md" mb={4}>
          User Details
        </Heading>
        <Box>
          <strong>Name:</strong> {userDetails.name}
        </Box>
        <Box>
          <strong>Email:</strong> {userDetails.email}
        </Box>
        <Box>
          <strong>Address:</strong> {userDetails.address}
        </Box>
        <Box>
          <strong>Phone Number:</strong> {userDetails.phoneNumber}
        </Box>
      </Box>
      <Box width="80%" p={4}>
        <Heading size="md" mb={4}>
          Products
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {products.map((product) => (
            <GridItem key={product.id}>
              <Box borderWidth="1px" rounded="lg" p={4} borderColor="gray.200">
                <Heading size="sm" mb={2}>
                  {product.name}
                </Heading>
                <Box>
                  <strong>Price:</strong> {product.price}
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default ProductPage;
