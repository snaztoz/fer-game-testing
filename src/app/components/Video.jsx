import React from 'react';
import Webcam from 'react-webcam';
import { BsFillPersonFill } from 'react-icons/bs';
import { Center, Icon } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Video() {
  const isCamActive = useSelector((state) => state.recognizer.isCamActive);

  return (
    <Center bg="gray.900" h="100%" w="100%">
      {isCamActive
        ? <Webcam width="70%" />
        : (
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
