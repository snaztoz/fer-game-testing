import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Box, Center, Icon } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Webcam from './Webcam';

export default function Video() {
  const isCamActive = useSelector((state) => state.recognizer.isCamActive);

  return (
    <Center bg="gray.900" h="100%" w="100%">
      {isCamActive
        ? (
          <Box width="70%">
            <Webcam />
          </Box>
        ) : (
          <Icon
            as={BsFillPersonFill}
            color="teal"
            h="25%"
            w="25%"
          />
        )}
    </Center>
  );
}
