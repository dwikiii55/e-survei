import { Box } from "@chakra-ui/layout";
import React from "react";

const CardContainer = ({ children, ...rest }) => {
  return (
    <div>
      <Box
        bg="white"
        shadow="md"
        borderRadius="lg"
        p={{ base: 2, sm: 3, md: 5, lg: 10 }}
        {...rest}
      >
        {children}
      </Box>
    </div>
  );
};

export default CardContainer;
