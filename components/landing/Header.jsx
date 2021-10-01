import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const Header = () => {
  return (
    <>
      <Box p={15} textAlign="center">
        <Heading>e-Survei🔎</Heading>
        <Text>silahkan pilih petugas yang melayani anda ...</Text>
      </Box>
    </>
  );
};

export default Header;
