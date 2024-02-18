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
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import data from '../db.json';

const ProductListByType = () => {
  const { type } = useParams(); 

  // Filter products based on the type
  const filteredProducts = data.products.filter(product => product.type === type);

  return (
    <Box>
      <Heading size="lg" mb="4">{type}</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
        {filteredProducts.map(product => (
          <Box key={product.id} maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" height="350px">
            <Link to={`/${product.type}/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
              <Box p="4">
                <Heading size="sm" mb="2">{product.name}</Heading>
                <Text fontSize="sm" fontWeight="bold">Price: ₹{product.price}</Text>
              </Box>
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductListByType;



// // ProductListByType.js  MONGODB

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
// import axios from 'axios';

// const ProductListByType = () => {
//   const { type } = useParams();
//   const [products, setProducts] = useState([]);

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

//   return (
//     <Box>
//       <Heading size="lg" mb="4">{type}</Heading>
//       <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
//         {products.map(product => (
//           <Box key={product._id} maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" height="350px">
//             <Link to={`/${product.type}/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//               <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
//               <Box p="4">
//                 <Heading size="sm" mb="2">{product.name}</Heading>
//                 <Text fontSize="sm" fontWeight="bold">Price: ₹{product.price}</Text>
//               </Box>
//             </Link>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProductListByType;

