// App.js
import React from 'react';

import AllRoutes from './Components/AllRoutes';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <div>
      <ChakraProvider>
      <AllRoutes />
      </ChakraProvider>
    </div>
  );
};

export default App;
