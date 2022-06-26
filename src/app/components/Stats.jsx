import React from 'react';
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
  const time = useSelector((state) => state.recognizer.time);

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
              <Td w="50%">
                <ExpressionInfo />
              </Td>
            </Tr>
            <Tr>
              <Td>Elapsed time</Td>
              <Td w="50%">{time}</Td>
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

const EXPRESSION_COLOR = {
  angry: 'red',
  disgusted: 'purple',
  fearful: 'gray',
  happy: 'yellow',
  neutral: 'alphas',
  sad: 'green',
  surprised: 'pink',
};

function ExpressionInfo() {
  const expressions = useSelector((state) => state.recognizer.data.exprs);

  const [dominantExpr, average] = Object
    .entries(expressions)
    .sort((a, b) => a[1] - b[1])
    .reverse()[0];

  const averageInPercent = (average * 100).toFixed(2);

  return (
    <>
      <Badge colorScheme={EXPRESSION_COLOR[dominantExpr]}>
        {dominantExpr}
      </Badge>
      {' '}
      ({averageInPercent}%)
    </>
  );
}
