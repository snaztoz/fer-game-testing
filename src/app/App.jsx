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
        <GridItem bg="mistyrose" colSpan={2}>
          <Flex direction="column" h="100%">
            <Box>
              <Navbar />
            </Box>
            <Box flex="1">
              <Video />
            </Box>
          </Flex>
        </GridItem>

        <GridItem bg="black" colSpan={1} />
      </Grid>
    </Box>
  );
}

export default App;
