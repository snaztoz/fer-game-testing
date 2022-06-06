import React from 'react';
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from 'react-icons/bs';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCam } from '../../store/reducer/recognizer';

export default function CamActivationButton() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);
  const isCamActive = useSelector((state) => state.recognizer.isCamActive);
  const dispatch = useDispatch();

  // Cam only can be turn on/off when the recognizer is
  // stopped (not played, nor paused)
  const isDisabled = recognizerStatus !== 'stopped';

  return (
    <Tooltip
      fontSize="sm"
      hasArrow
      isDisabled={isDisabled}
      label={isCamActive
        ? 'Close Cam'
        : 'Open Cam'}
    >
      <span>
        {isCamActive
          ? (
            <IconButton
              aria-label="Close Cam"
              colorScheme="red"
              icon={<BsFillCameraVideoOffFill />}
              isDisabled={isDisabled}
              isRound
              onClick={() => dispatch(toggleCam())}
            />
          )
          : (
            <IconButton
              aria-label="Open Cam"
              colorScheme="teal"
              icon={<BsFillCameraVideoFill />}
              isDisabled={isDisabled}
              isRound
              onClick={() => dispatch(toggleCam())}
            />
          )}

      </span>
    </Tooltip>
  );
}
