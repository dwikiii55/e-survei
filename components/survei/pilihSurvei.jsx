import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const PilihSurvei = () => {
  return (
    <>
      <Center>
        <Flex>
          <Box height="50px" W="30px" bg="blue">
            <Text>Puas</Text>
          </Box>
          <Box>
            <Text>Tidak Puas</Text>
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default PilihSurvei;
