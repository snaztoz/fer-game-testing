import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { log } from '../../store/reducer/log';
import { start } from '../../store/reducer/recognizer';

export default function StartButton() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);
  const isCamActive = useSelector((state) => state.recognizer.isCamActive);
  const dispatch = useDispatch();

  // Recognizer can only be started when the cam is activated
  const isDisabled = !isCamActive;
  let tooltipLabel;

  if (!isCamActive) {
    tooltipLabel = 'Cam must be enabled!';
  } else if (recognizerStatus === 'stopped') {
    tooltipLabel = 'Start';
  } else {
    tooltipLabel = 'Resume';
  }

  return (
    <Tooltip
      fontSize="sm"
      hasArrow
      label={tooltipLabel}
    >
      <span>
        <IconButton
          aria-label="Start FER"
          colorScheme="teal"
          icon={<BsFillPlayFill />}
          isDisabled={isDisabled}
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
