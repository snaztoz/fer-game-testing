import React from 'react';
import {
  BsFileEarmarkTextFill,
  BsFillPauseFill,
  BsFillPlayFill,
} from 'react-icons/bs';
import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
} from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex alignItems="center" bg="snow" p="1em">
      <Heading color="teal" size="md">
        FER-Game-Testing
      </Heading>

      <Spacer />

      <HStack>
        <IconButton
          aria-label="Start FER"
          colorScheme="teal"
          icon={<BsFillPlayFill />}
          isRound
        />
        <IconButton
          aria-label="Pause FER"
          colorScheme="teal"
          icon={<BsFillPauseFill />}
          isDisabled
          isRound
        />
        <IconButton
          aria-label="Generate report"
          colorScheme="teal"
          icon={<BsFileEarmarkTextFill />}
          isRound
        />
      </HStack>
    </Flex>
  );
}

export default Navbar;
