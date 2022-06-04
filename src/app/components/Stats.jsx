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

function Stats() {
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
              <Td><Badge colorScheme="green">Running</Badge></Td>
            </Tr>
            <Tr>
              <Td>Avg. Emotion</Td>
              <Td>Happy</Td>
            </Tr>
            <Tr>
              <Td>Elapsed time</Td>
              <Td>{`${elapsed}s`}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Stats;
