import { Box, Grid, GridItem } from '@chakra-ui/react';

import Video from './components/Video';

function App() {
  return (
    <Box bg='teal' h='100vh' w='100vw'>
      <Grid h='100%' templateColumns='repeat(3, 1fr)' w='100%'>
        <GridItem colSpan={2} bg='mistyrose'>
          <Video />
        </GridItem>
        <GridItem colSpan={1} bg='black'></GridItem>
      </Grid>
    </Box>
  );
}

export default App;
