import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

function App() {
  return (
    <Box h="100vh" w="100vw">
      <Grid h="100%" templateColumns="repeat(3, 1fr)" w="100%">
        {/* Main Section */}
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

        {/* Sidebar Section */}
        <GridItem boxShadow="md">
          <Sidebar />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
