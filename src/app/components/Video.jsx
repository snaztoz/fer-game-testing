import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

function Video() {
  return (
    <Center h="100%" w="100%">
      <Spinner
        color="teal"
        size="xl"
        speed="1s"
        thickness="4px"
      />
    </Center>
  );
}

export default Video;
