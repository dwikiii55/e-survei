import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Text, WrapItem } from "@chakra-ui/layout";
import React from "react";

const CardLanding = () => {
  return (
    <Flex alignItems="center" flexDir="column">
      <Box
        borderRadius="20px"
        _hover={{ bg: "green.200" }}
        w={"90%"}
        mt={5}
        bg={useColorModeValue("gray.100", "gray.700")}
        boxShadow={"sm"}
      >
        <Flex
          alignItems="center"
          flexDir={{ base: "row", sm: "row", md: "row", lg: "row" }}
        >
          <Flex p={1}>
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
              fontSize={{ base: "20px", md: "25px", lg: "25px" }}
            >
              Muhammad Alfian Syah
            </Text>
            <Text fontSize={{ base: "15px", md: "20px", lg: "22px" }}>
              Petugas TPT
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CardLanding;
