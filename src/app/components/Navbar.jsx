import React from 'react';
import {
  Flex,
  HStack,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import GenerateReportButton from './navbar/GenerateReportButton';
import PauseButton from './navbar/PauseButton';
import StartButton from './navbar/StartButton';
import StopButton from './navbar/StopButton';
import CamActivationButton from './navbar/CamActivationButton';

export default function Navbar() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);

  const isRecognizerRunning = recognizerStatus === 'running';

  return (
    <Flex alignItems="center" bg="snow" p="1em">
      <Heading color="teal" size="md">
        FER-Game-Testing
      </Heading>

      <Spacer />

      <HStack>
        <CamActivationButton />

        {isRecognizerRunning
          ? <StopButton />
          : <StartButton />}

        <PauseButton />

        <GenerateReportButton />
      </HStack>
    </Flex>
  );
}
