import React from 'react';
import {
  BsFileEarmarkTextFill,
  BsFillPauseFill,
  BsFillPlayFill,
} from 'react-icons/bs';
import {
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex alignItems="center" bg="snow" p="1em">
      <Text as="b" color="teal" fontSize="xl">
        FER-Game-Testing
      </Text>

      <Spacer />

      <HStack>
        <IconButton
          ariaLabel="Start FER"
          colorScheme="teal"
          icon={<BsFillPlayFill />}
          isRound
        />
        <IconButton
          ariaLabel="Pause FER"
          colorScheme="teal"
          icon={<BsFillPauseFill />}
          isDisabled
          isRound
        />
        <IconButton
          ariaLabel="Generate report"
          colorScheme="teal"
          icon={<BsFileEarmarkTextFill />}
          isRound
        />
      </HStack>
    </Flex>
  );
}

export default Navbar;
