import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Exam Time Table
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Subject</Th>
            <Th>Room</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>May 1, 2023</Td>
            <Td>9:00 AM - 12:00 PM</Td>
            <Td>Mathematics</Td>
            <Td>101</Td>
          </Tr>
          <Tr>
            <Td>May 3, 2023</Td>
            <Td>1:00 PM - 4:00 PM</Td>
            <Td>Physics</Td>
            <Td>201</Td>
          </Tr>
          <Tr>
            <Td>May 5, 2023</Td>
            <Td>9:00 AM - 12:00 PM</Td>
            <Td>Chemistry</Td>
            <Td>102</Td>
          </Tr>
          <Tr>
            <Td>May 8, 2023</Td>
            <Td>1:00 PM - 4:00 PM</Td>
            <Td>Biology</Td>
            <Td>202</Td>
          </Tr>
          <Tr>
            <Td>May 10, 2023</Td>
            <Td>9:00 AM - 12:00 PM</Td>
            <Td>English</Td>
            <Td>103</Td>
          </Tr>
          <Tr>
            <Td>May 12, 2023</Td>
            <Td>1:00 PM - 4:00 PM</Td>
            <Td>History</Td>
            <Td>203</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
