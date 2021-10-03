import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Divider, Flex, Text, WrapItem } from "@chakra-ui/layout";
import React from "react";
const data = { nama: "alfian", label: "petugas TPT" };
const CardSurvei = () => {
  return (
    <>
      <Box
        key={data.nama}
        borderRadius="20px"
        w={"100%"}
        my={8}
        bg={useColorModeValue("gray.100", "gray.700")}
        boxShadow="sm"
        // _hover={{ bg: "green.200", boxShadow: "lg" }}
      >
        <Flex
          alignItems="center"
          flexDir={{ base: "row", sm: "row", md: "row", lg: "row" }}
        >
          <Flex p={3} pl={7}>
            <WrapItem>
              <Avatar
                verticalAlign
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/broken-link"
              />{" "}
            </WrapItem>
          </Flex>
          <Divider
            height="60px"
            orientation="vertical"
            colorScheme="black"
            size="30px"
          />

          <Flex ml={5} justifyContent="center" flexDir={"column"}>
            <Text
              fontWeight="bold"
              fontSize={{ base: "20px", md: "25px", lg: "25px" }}
            >
              {data.nama}
            </Text>
            <Text fontSize={{ base: "15px", md: "20px", lg: "20px" }}>
              {data.label}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default CardSurvei;
