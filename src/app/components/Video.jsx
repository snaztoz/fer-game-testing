import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

export default function Video() {
  return (
    <Center bg="gray.900" h="100%" w="100%">
      <Center bg="ghostwhite" borderRadius="lg" px="2em" py="1em">
        <Spinner
          color="teal"
          size="xl"
          speed="1s"
          thickness="4px"
        />
      </Center>
    </Center>
  );
}
