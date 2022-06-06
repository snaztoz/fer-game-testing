import React from 'react';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function GenerateReportButton() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);

  const isDisabled = recognizerStatus !== 'stopped';

  return (
    <Tooltip
      fontSize="sm"
      hasArrow
      isDisabled={isDisabled}
      label="Generate Report"
    >
      <span>
        <IconButton
          aria-label="Generate report"
          colorScheme="teal"
          icon={<BsFileEarmarkTextFill />}
          isDisabled={isDisabled}
          isRound
        />
      </span>
    </Tooltip>
  );
}
