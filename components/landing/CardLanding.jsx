import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Text, WrapItem } from "@chakra-ui/layout";
import React from "react";

const CardLanding = () => {
  return (
    <Flex flexDir="column">
      <Box mt={5} bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex
          alignItems="center"
          flexDir={{ base: "row", sm: "row", md: "row", lg: "row" }}
          boxShadow={"lg"}
        >
          <Flex p={3}>
            <WrapItem>
              <Avatar
                verticalAlign
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />{" "}
            </WrapItem>
          </Flex>
          <Flex justifyContent="center" flexDir={"column"}>
            <Text
              fontWeight="bold"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            >
              Muhammad Alfian Syah
            </Text>
            <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
              Petugas TPT
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box mt={5} bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex
          alignItems="center"
          flexDir={{ base: "row", sm: "row", md: "row", lg: "row" }}
          boxShadow={"lg"}
        >
          <Flex p={3}>
            <WrapItem>
              <Avatar
                verticalAlign
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />{" "}
            </WrapItem>
          </Flex>
          <Flex justifyContent="center" flexDir={"column"}>
            <Text
              fontWeight="bold"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            >
              Muhammad Alfian Syah
            </Text>
            <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
              Petugas TPT
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CardLanding;
