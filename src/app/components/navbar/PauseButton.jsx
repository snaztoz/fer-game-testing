import React from 'react';
import { BsFillPauseFill } from 'react-icons/bs';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { log } from '../../store/reducer/log';
import { pause } from '../../store/reducer/recognizer';

export default function PauseButton() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);
  const dispatch = useDispatch();

  const isDisabled = recognizerStatus !== 'running';

  return (
    <Tooltip
      fontSize="sm"
      hasArrow
      isDisabled={isDisabled}
      label="Pause"
    >
      <span>
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
      </span>
    </Tooltip>
  );
}
