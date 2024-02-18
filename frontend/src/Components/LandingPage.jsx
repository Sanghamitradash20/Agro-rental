import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { Button, Heading, Box, useMediaQuery,Center,ChakraProvider,ThemeProvider } from '@chakra-ui/react';

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 320px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const backgroundStyle = {
    backgroundImage:'url("https://img.freepik.com/free-photo/beautiful-terraced-rice-field-water-season-top-view-rices-paddy-fieldthailand-generative-ai_1258-153055.jpg?size=626&ext=jpg&ga=GA1.1.432368561.1707589993&semt=sph")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <ChakraProvider>
      {/* <ThemeProvider> */}
    <Box style={backgroundStyle} minH="100vh">
      <Heading textAlign="center" fontSize="6xl" padding="50px 50px 10px 50px">Agro Rental</Heading>
      <Heading textAlign="center" fontSize="md" fontStyle="italic">FEELS REAL AND AUTHENTIC</Heading>
      <Center>
      <Box p="30" textAlign="center"
           w={isMobile ? "80%" : (isLargerThan768 ? "50%" : "100%")}>
        <Link to="/login/farmer">
        <br /><br /> <Button bgGradient="linear(green.900, blue.300, green.800)" variant="solid" size='lg' fontSize="20px" fontStyle="bold">Farmer</Button> <br /><br />
        </Link>
        <Link to="/login/admin">
          <Button bgGradient="linear(green.900, blue.300, green.800)" variant="solid" size='lg' fontSize="20px" fontStyle="bold">Admin</Button> <br /><br />
        </Link>
        <Link to="/login/vendor">
          <Button bgGradient="linear(green.900, blue.300, green.800)" variant="solid" size='lg' fontSize="20px" fontStyle="bold">Vendor</Button><br /><br />
        </Link>
      </Box>
      </Center>
    </Box>
    {/* </ThemeProvider> */}
    </ChakraProvider>
  );
};

export default LandingPage;
