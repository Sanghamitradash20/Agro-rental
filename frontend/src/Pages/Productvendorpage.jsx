import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Flex,
  ChakraProvider,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import bell from "../images/bell.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Vproductstyles from "./css/Vproductstyles.css";
import { Link } from "react-router-dom";
import add from "../images/add.png";
import contact from "../images/contact.png"
const Productvendorpage = () => {
  const navigate = useNavigate();
  const { vendorID } = useParams();
  const [details, setDetails] = useState({});
  const getdetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/vendors/details/${vendorID}`
      );
      setDetails(response.data.details);
      console.log(response);
    } catch (error) {
      console.error("Error in fetching", error.message);
    }
  };
  useEffect(() => {
    getdetails();
  }, [vendorID]);

  const UserInformation = () => (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      fontSize={"25px"}
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text>Name: {details.Name}</Text>
        </Box>
        <Box>
          <Text>Phone: {details.mobileNumber}</Text>
          <Text>
            Address: {details.address}
            {details.cityVillage}
          </Text>
          <Text>NearestPoliceStation: {details.nearestPoliceStation}</Text>
          <Text>Pincode {details.pincode}</Text>
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
    name: "nandu",
    phone: 123345780,
    address: "addeekss",
  };

  const products = [
    {
      id: "TRACTOR657",
      orderId: "JH34D117",
      brand: "John Deere",
      price: "30,000",
      condition: "New",
      farmer: {
        name: "Alam Ali",
        address: "Bagha,Kusma",
        phone: "8835069014",
        duration: "JM.22D-30H",
      },
    },
  ];

  return (
    <>
      <Navbar />
      <ChakraProvider>
        <Box
          className="back"
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box p="5" width="80%">
            <UserInformation />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            marginLeft={"30%"}
            width={"70%"}
            marginTop={"90px"}
          >
            <Image
            borderRadius={'20px'}
            border={'1px'}
              src={add}
              alt="add"
              w="14%"
              // onClick={() => navigate(`/vendor/addproduct?id=${vendorID}`)}
              onClick={() => navigate(`/vendor/addproduct/${vendorID}`)}

              cursor="pointer"
              margin="0"
              padding="0"
              marginLeft={"20px"}
            />
            <Image
             borderRadius={'20px'}
             border={'1px'}
              src={bell}
              alt="notification"
              w="14%"
              onClick={() => navigate("/notification")}
              cursor="pointer"
              margin="0"
              padding="0"
              marginLeft={"20px"}
            />
            <Image
             borderRadius={'20px'}
             border={'1px'}
              src={contact}
              alt="contact"
              w="14%"
              onClick={() => navigate("/notification")}
              cursor="pointer"
              margin="0"
              padding="0"
              marginLeft={"20px"}
            />
          </Box>
        </Box>
        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </SimpleGrid> */}
      </ChakraProvider>
    </>
  );
};

export default Productvendorpage;
