import React from 'react';
import { BsFillStopFill } from 'react-icons/bs';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { log } from '../../store/reducer/log';
import { stop } from '../../store/reducer/recognizer';

export default function StopButton() {
  const dispatch = useDispatch();

  return (
    <Tooltip
      fontSize="sm"
      hasArrow
      label="Stop"
    >
      <span>
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
      </span>
    </Tooltip>
  );
}
