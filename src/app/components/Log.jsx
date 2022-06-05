import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Log() {
  const logs = useSelector((state) => state.log.buffer);

  const logItems = logs
    .map((log) => (
      <Text key={log.id} fontSize="xs">
        {`[${log.timestamp}] ${log.message}`}
      </Text>
    ));

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
