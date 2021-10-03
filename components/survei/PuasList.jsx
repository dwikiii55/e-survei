import { Box, Flex, Heading, VStack } from "@chakra-ui/layout";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import React, { useState } from "react";
const dataDummy = [
  "pelayanan ramah ",
  "petugas baik hati ",
  "fasilitas lengkap",
];

const PuasList = () => {
  const [isClick, setisClick] = useState(false);
  return (
    <>
      <Heading>Alasan :</Heading>
      <CheckboxGroup colorScheme="blue">
        <Flex flexDir="column">
          {dataDummy.map((data) => (
            <Checkbox
              borderRadius={5}
              m={3}
              bg="gray.50"
              size="lg"
              id="{data}"
              key={data}
              value={data}
              p={6}
              _hover={{ bg: "green.200", boxShadow: "lg" }}
            >
              {data}
            </Checkbox>
          ))}
        </Flex>
      </CheckboxGroup>
    </>
  );
};

export default PuasList;
