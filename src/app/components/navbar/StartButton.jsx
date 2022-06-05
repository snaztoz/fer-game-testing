import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { log } from '../../store/reducer/log';
import { start } from '../../store/reducer/recognizer';

export default function StartButton() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);
  const dispatch = useDispatch();

  return (
    <Tooltip
      fontSize="sm"
      hasArrow
      label={recognizerStatus === 'stopped'
        ? 'Start'
        : 'Resume'}
    >
      <span>
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
      </span>
    </Tooltip>
  );
}
