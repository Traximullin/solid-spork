import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import RegistationPages from './pages/AuthPage/AuthPage';

function App() {
  return (
    <ChakraProvider>
      <RegistationPages/>
    </ChakraProvider>
  );
}

export default App;
