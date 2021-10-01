import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import CardContainer from "../../components/container/CardContainer";
import TableCs from "../../components/dashboard/TableCs";
import TableSurvei from "../../components/dashboard/TableSurvei";
import ChartPertumbuhan from "../../components/layout/dashboard/ChartPertumbuhan";
import ChartProporsi from "../../components/layout/dashboard/ChartProporsi";
import SideMenu from "../../components/layout/dashboard/SideMenu";
import TambahCs from "../../components/layout/dashboard/TambahCs";

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
