import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const TitleDasboardPage = ({ title, icon }) => {
  const router = useRouter();
  return (
    <div>
      <Flex alignItems="center" mb={5}>
        <Heading size="lg">{icon}</Heading>
        <Box m={2} />
        <Heading size="lg">{title}</Heading>
        <Spacer />
        <Button
          leftIcon={<FiChevronLeft />}
          variant="ghost"
          onClick={() => router.back()}
        >
          Kembali
        </Button>
      </Flex>
    </div>
  );
};

export default TitleDasboardPage;
