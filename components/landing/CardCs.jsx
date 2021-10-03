import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import React from "react";
const dataDummy = [
  { nama: "alfian ", jenis: " TPT" },
  { nama: "dwiki  ", jenis: " PPATK" },
  { nama: "widhan ", jenis: " DJP" },
];
const CardCs = () => {
  return (
    <Flex alignItems="center" flexDir="column">
      {dataDummy.map((data) => {
        return (
          <Box
            key={data.nama}
            borderRadius="20px"
            w={"90%"}
            mt={5}
            bg={useColorModeValue("gray.100", "gray.700")}
            boxShadow="sm"
            _hover={{ bg: "green.200", boxShadow: "lg" }}
          >
            <Flex
              alignItems="center"
              flexDir={{ base: "row", sm: "row", md: "row", lg: "row" }}
            >
              <Flex p={3} pl={7}>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="xl"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/ryan-florence"
                    />
                  </WrapItem>
                </Wrap>
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
                  {`petugas ${data.jenis}`}
                </Text>
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default CardCs;
