import { Container } from "@chakra-ui/layout";
import React from "react";

const AppContainer = ({ children }) => {
  return (
    <>
      <Container maxWidth="3xl" bg="white" minH="100vh">
        {children}
      </Container>
    </>
  );
};

export default AppContainer;
