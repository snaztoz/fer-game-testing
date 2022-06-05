import React from 'react';
import {
  BsFileEarmarkTextFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillStopFill,
} from 'react-icons/bs';
import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { log } from '../store/reducer/log';
import {
  start,
  stop,
  pause,
} from '../store/reducer/recognizer';

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
        {isRecognizerRunning
          ? <StopButton />
          : <StartButton />}

        <PauseButton />

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

//
// Private components
//

function StartButton() {
  const dispatch = useDispatch();

  return (
    <IconButton
      aria-label="Start FER"
      colorScheme="teal"
      icon={<BsFillPlayFill />}
      isRound
      onClick={() => {
        dispatch(start());
        dispatch(log('FER is running'));
      }}
    />
  );
}

function StopButton() {
  const dispatch = useDispatch();

  return (
    <IconButton
      aria-label="Start FER"
      colorScheme="red"
      icon={<BsFillStopFill />}
      isRound
      onClick={() => {
        dispatch(stop());
        dispatch(log('FER is stopped'));
      }}
    />
  );
}

function PauseButton() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);
  const dispatch = useDispatch();

  const isDisabled = recognizerStatus !== 'running';

  return (
    <IconButton
      aria-label="Pause FER"
      colorScheme="teal"
      icon={<BsFillPauseFill />}
      isDisabled={isDisabled}
      isRound
      onClick={() => {
        dispatch(pause());
        dispatch(log('FER is paused'));
      }}
    />
  );
}
