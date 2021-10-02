import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import CardContainer from "../../components/container/CardContainer";
import TableSurvei from "../../components/dashboard/TableSurvei";
import ChartPertumbuhan from "../../components/layout/dashboard/ChartPertumbuhan";
import ChartProporsi from "../../components/layout/dashboard/ChartProporsi";
import SideMenu from "../../components/layout/dashboard/SideMenu";

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <SideMenu>
        <Flex w="full">
          <Box>
            <CardContainer>
              <ChartPertumbuhan />
            </CardContainer>
          </Box>
          <Box m={5} />
          <Box>
            <CardContainer>
              <ChartProporsi />
            </CardContainer>
          </Box>
        </Flex>
        <Box m={5} />
        <CardContainer>
          <TableSurvei />
        </CardContainer>
      </SideMenu>
    </>
  );
};

export default Admin;
