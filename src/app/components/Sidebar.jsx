import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Stats from './Stats';

function Sidebar() {
  return (
    <Grid h="100%" templateRows="repeat(2, 1fr)">
      <GridItem>
        <Stats />
      </GridItem>
      <GridItem>foo</GridItem>
    </Grid>
  );
}

export default Sidebar;
