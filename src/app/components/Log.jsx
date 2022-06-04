import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

function Log() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const tick = setInterval(
      () => {
        const time = new Date()
          .toLocaleString('en-GB', { timeZone: 'UTC' });

        const message = 'Emotion detected: Happy (99,3%)';
        const log = `[${time}] ${message}`;

        setLogs(logs.concat([log]));
      },
      5000,
    );

    return function cleanup() {
      clearInterval(tick);
    };
  });

  const logItems = logs
    .map((log, i) => <Text key={i} fontSize="xs">{log}</Text>); // eslint-disable-line react/no-array-index-key

  return (
    <Flex
      bg="black"
      color="limegreen"
      direction="column"
      // if possible, change this to using percentage instead
      h="50vh"
      p="1.5em"
    >
      <Heading size="md">
        Log
      </Heading>

      <Box flex="1" mt="1em" overflowY="auto">
        {logItems}
      </Box>
    </Flex>
  );
}

export default Log;
