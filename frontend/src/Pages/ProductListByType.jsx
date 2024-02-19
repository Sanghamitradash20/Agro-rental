// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
// import data from '../db.json';

// const ProductListByType = () => {
//   const { type } = useParams(); 

//   // Filter products based on the type
//   const filteredProducts = data.products.filter(product => product.type === type);

//   return (
//     <Box>
//       <Heading size="lg" mb="4">{type}</Heading>
//       <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
//         {filteredProducts.map(product => (
//           <Box key={product.id} maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" height="350px">
//             <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
//             <Box p="4">
//               <Heading size="sm" mb="2">{product.name}</Heading>
//               <Text fontSize="sm" fontWeight="bold">Price: ₹{product.price}</Text>
//             </Box>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProductListByType;



// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { Box, Grid, Heading, Image, Text ,useBreakpointValue,Center} from '@chakra-ui/react';
// import data from '../db.json';

// const ProductListByType = () => {
//   const { type } = useParams(); 

//   // Filter products based on the type
//   const filteredProducts = data.products.filter(product => product.type === type);


//   const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" })
//     const responsiveHeight = useBreakpointValue({ base: "1550px", sm: "1450px", md: "1000px" })

//   return (
//     <Box bg="gray.50" w="100%"  paddingY="50px" paddingX={5}>
//             <Center>
//                 <Box width="700px">
//                 <Heading size="lg" mb="4">{type}</Heading>
//                     <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
//                         <Box bg="white" shadow="md" borderRadius="5px">
//                         {filteredProducts.map(product => (
//           <Box key={product.id} maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" height="350px">
//             <Link to={`/${product.type}/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//               <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
//               <Box p="4">
//                 <Heading size="sm" mb="2">{product.name}</Heading>
//                 <Text fontSize="sm" fontWeight="bold">Price: ₹{product.price}</Text>
//               </Box>
//             </Link>
//           </Box>
//         ))}
//                           </Box>
                            
//                     </Grid>
//                 </Box>
//             </Center>
//         </Box>
//   );
// };

// export default ProductListByType;



// // ProductListByType.js  MONGODB

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { Box, Grid, Heading, Image, Text,Flex ,Button} from '@chakra-ui/react';
// import axios from 'axios';

// const ProductListByType = () => {
//   const { type } = useParams();
//   const [product, setProducts] = useState([]);

//   const handleBuyNow = () => {
//     //     // Logic for Buy Now action
//        console.log(`Buy Now clicked for ${product.name}`);}

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/products/${type}`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, [type]);
// const responsiveButtonWidth = useBreakpointValue({ base: "100px", sm: "200px", md: "100px" })  

//   return (
//     <Box
//       maxW="sm"
//       borderWidth="5px"
//       borderRadius="lg"
//       overflow="hidden"
//       boxShadow="md"
//     >
//       <Image src={product.image} alt={product.name} />

//       <Box p="6">
//         <Box d="flex" alignItems="baseline">
//           <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
//             {product.category}
//           </Text>
//         </Box>

//         <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
//           {product.name}
//         </Box>

//         <Box>
//           ${product.price}
//           <Box as="span" color="gray.600" fontSize="sm">
//             {' '}
//             / {product.unit}
//           </Box>
//         </Box>

//         <Flex mt="2" justify="space-between" align="center">
//           <Button onClick={handleBuyNow} colorScheme="green">
//             Rent now
//           </Button>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// const ProductsPage = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Product ',
//       category: 'Category 1',
//       image: 'https://via.placeholder.com/150',
//       price: 99.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product ',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product ',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product ',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
    
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       category: 'Category 2',
//       image: 'https://via.placeholder.com/150',
//       price: 149.99,
//       unit: 'unit',
//     },
//     // Add more products as needed
//   ];

//   return (
//     <Flex justify="center" p={4} flexWrap="wrap">
//       {products.map(product => (
//         <ProductListByType key={product.id} product={product} />
//       ))}
//     </Flex>
//   );
// };

// export default ProductListByType;




import React from 'react';
import { Box, Flex, Image, Text, Button,useBreakpointValue } from '@chakra-ui/react';
// import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const handleBuyNow = () => {
    // Logic for Buy Now action
    console.log(`Buy Now clicked for ${product.name}`);
  };
  // const responsiveButtonWidth = useBreakpointValue({ base: "100px", sm: "200px", md: "100px" })

  return (
    <Box
      maxW="sm"
      borderWidth="10px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={product.image} alt={product.name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
            {product.category}
          </Text>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.name}
        </Box>

        <Box>
          ${product.price}
          <Box as="span" color="gray.600" fontSize="sm">
            {' '}
            / {product.unit}
          </Box>
        </Box>

        <Flex mt="2" justify="space-between" align="center">
          <Button onClick={handleBuyNow} colorScheme="green">
            Rent now
          </Button>
          { /*<Button width="1000px" maxWidth={responsiveButtonWidth} marginY={5} leftIcon={<FaShoppingCart />}> */}
                    
                {/* </Button> */}

        </Flex>
      </Box>
    </Box>
  );
};

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product ',
      category: 'Category 1',
      image: 'https://via.placeholder.com/150',
      price: 99.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product ',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product ',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product ',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150',
      price: 149.99,
      unit: 'unit',
    },
    // Add more products as needed
  ];

  return (
    <Flex justify="center" p={4} flexWrap="wrap">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  );
};

export default ProductsPage;
