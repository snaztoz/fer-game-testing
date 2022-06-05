import React, { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Stats() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const tick = setInterval(
      () => setElapsed(elapsed + 1),
      1000,
    );

    return function cleanup() {
      clearInterval(tick);
    };
  });

  return (
    <Box h="100%">
      <Box p="1.5em">
        <Heading size="md">
          Stats
        </Heading>
      </Box>

      <TableContainer p="1em">
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Status</Td>
              <Td w="50%">
                <StatusBadge />
              </Td>
            </Tr>
            <Tr>
              <Td>Avg. Emotion</Td>
              <Td w="50%">Happy</Td>
            </Tr>
            <Tr>
              <Td>Elapsed time</Td>
              <Td w="50%">{`${elapsed}s`}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

//
// Private components
//

function StatusBadge() {
  const recognizerStatus = useSelector((state) => state.recognizer.status);

  const colorScheme = {
    running: 'green',
    stopped: 'red',
    paused: 'gray',
  }[recognizerStatus];

  return (
    <Badge colorScheme={colorScheme}>{recognizerStatus}</Badge>
  );
}
