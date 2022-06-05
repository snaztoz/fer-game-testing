import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Log from './Log';
import Stats from './Stats';

export default function Sidebar() {
  return (
    <Grid h="100%" templateRows="repeat(2, 1fr)">
      <GridItem>
        <Stats />
      </GridItem>
      <GridItem>
        <Log />
      </GridItem>
    </Grid>
  );
}
