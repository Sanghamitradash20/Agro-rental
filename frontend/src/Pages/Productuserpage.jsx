import React, { useState,useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Uproductstyles from "./css/Uproductstyles.css";
import tractor from "../images/tractor.png";
import cult from "../images/cult.png";
import { useParams } from 'react-router-dom';
const ProductPage = () => {
  const { ID } = useParams();
  const navigate = useNavigate();
  const user = {
    Name: "John Doe",
    phoneNumber: "123-456-7890",
    location: "New York, USA",
    pincode: "10001",
  };
  const [details,setDetails,]=useState({});
  const getdetails = async (event) => {
    event.preventDefault();
  try {
    const response = await axios.get(`http://localhost:5000/api/farmers/details/${ID}`);
    setDetails(response.data.details); 
  } catch (error) {
    console.error('Error in fetching', error.message);
  }
  }
  useEffect(() => {
    getdetails(); 
  }, [ID]);
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
    { id: 4, name: "Product 4", price: "$40" },
    { id: 5, name: "Product 5", price: "$50" },
    { id: 6, name: "Product 6", price: "$60" },
  ];
  // base: "0px",
  // sm: "320px",
  // md: "768px",
  // lg: "960px",
  // xl: "1200px",
  // "2xl": "1536px",
  return (
    <div>
      <Navbar />
      <Box className="image" width={{ base: "100%", md: "80%", lg: "60%" }}>
        <Stack direction="column" spacing={{ base: 4, md: 8 }} width={"100%"}>
          <Box className="Pheader">
            <ChakraProvider>
              <Text
                fontSize={{ sm: "20px", md: "40px", lg: "50px" }}
                marginTop={{ sm: "20px", md: "50px", lg: "80px" }}
              >
                AGRI RENTAL
              </Text>
            </ChakraProvider>
          </Box>
          <Box className="parent">
            <Box className="tractor">
              <img src={tractor} id="tract" />
            </Box>
            <ChakraProvider>
              <Box className="txt">
                <Text fontSize={{ sm: "20px", md: "40px", lg: "40px" }}>
                  Vendor to Farmer
                </Text>
                <Text fontSize={{ sm: "20px", md: "40px", lg: "40px" }}>
                  Equipment Rental Service
                </Text>
              </Box>
            </ChakraProvider>
            <Box className="cult">
              <img src={cult} id="cult" />
            </Box>
          </Box>
        </Stack>
        <Box className="userdetails">
          <text fontWeight="bold" fontSize="xl" mb={2} color="white">
            User Details
          </text> <br />
          <text mt={2} color="black">
            <strong>Name:</strong> {details.name}
          </text><br />
          <text mt={2} color="black">
            <strong>Phone Number:</strong> {details.mobileNumber}
          </text><br />
          <text mt={2} color="black">
            <strong>Location:</strong> {details.address}{details.cityVillage}
          </text><br />
          <text mt={2} color="black">
            <strong>Pincode:</strong> {details.pincode}
          </text>
          <text mt={2} color="black">
            <strong>Police station:</strong> {details.nearestPoliceStation}
          </text>
        </Box>
      </Box>
    </div>
  );
};

export default ProductPage;


  /* <Stack direction="row" spacing={8} width="100%">
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
</Stack> */

