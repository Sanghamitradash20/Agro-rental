import { Box, Text, SimpleGrid, Image, Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Vproductstyles from './css/Vproductstyles.css'
const Productvendorpage = () => {
const {vendorID } = useParams();
const [details,setDetails,]=useState({});
const Password='';
const getdetails = async () => {
try {
  const response = await axios.get(`http://localhost:5000/api/vendors/details/${vendorID}`);
  setDetails(response.data.details); 
  Password=response.data.pass;
  console.log(response);
} catch (error) {
  console.error('Error in fetching', error.message);
}
}
useEffect(() => {
  getdetails(); 
}, [vendorID]);

const UserInformation = ({ name, phone, address, password }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Text>Name: {name}</Text>
      </Box>
      <Box>
        <Text>Phone: {phone}</Text>
        <Text>Address: {address}</Text>
        <Text>Password: {password}</Text>
      </Box>
    </Box>
  </Box>
);

// const ProductCard = ({ product, farmer }) => (
//   <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
//     <Image src={product.image} alt={product.id} />
//     <Box p="6">
//       <Box d="flex" alignItems="baseline">
//         <Text>Product ID: {product.id}</Text>
//         <Text>Order ID: {product.orderId}</Text>
//         <Text>Brand: {product.brand}</Text>
//         <Text>Price: {product.price}</Text>
//         <Text>Condition: {product.condition}</Text>
//       </Box>
//       <Box>
//         <Text>Name: {farmer.name}</Text>
//         <Text>Address: {farmer.address}</Text>
//         <Text>Phone No.: {farmer.phone}</Text>
//         <Text>Duration: {farmer.duration}</Text>
//       </Box>
//     </Box>
//   </Box>
// );
  const user = {
    name: details.Name,
    phone: details.mobileNumber,
    address: details.address + details.cityVillage + details.pincode,
    password: Password,
  };

  const products = [
    {
      id: 'TRACTOR657',
      orderId: 'JH34D117',
      brand: 'John Deere',
      price: '30,000',
      condition: 'New',
      farmer: {
        name: 'Alam Ali',
        address: 'Bagha,Kusma',
        phone: '8835069014',
        duration: 'JM.22D-30H',
      },
    },
  ];

  return (
  <Box className='back'>
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Box flex="1" p="5">
        <UserInformation {...user} />
      </Box>
      <Box flex="2" p="5">
        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </SimpleGrid> */}
      </Box>
    </Flex>
    </Box>
  );
};

export default Productvendorpage;
