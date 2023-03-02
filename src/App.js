import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Login from './pages/Login';
import { AuthProvider } from './actions/Context';

function App() {
  return (
    <AuthProvider>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Login/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
    </AuthProvider> 
  );
}

export default App;
