import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Video from './components/Video';

function App() {
  return (
    <Box bg="teal" h="100vh" w="100vw">
      <Grid h="100%" templateColumns="repeat(3, 1fr)" w="100%">
        <GridItem colSpan={2} bg="mistyrose">
          <Flex h="100%" direction="column">
            <Box>
              <Navbar />
            </Box>
            <Box flex="1">
              <Video />
            </Box>
          </Flex>
        </GridItem>

        <GridItem colSpan={1} bg="black" />
      </Grid>
    </Box>
  );
}

export default App;
