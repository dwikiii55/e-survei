import React, { useRef } from "react";
import CardContainer from "../../components/container/CardContainer";
import TableCs from "../../components/dashboard/TableCs";
import SideMenu from "../../components/layout/dashboard/SideMenu";
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
import TambahCs from "../../components/layout/dashboard/TambahCs";
import { FiPlus } from "react-icons/fi";

const CustomerService = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <div>
      <SideMenu>
        <CardContainer>
          <Button
            bg="#14274E"
            colorScheme="blue"
            rightIcon={<FiPlus />}
            ref={btnRef}
            onClick={onOpen}
          >
            Tambah
          </Button>
          <Box m={5} />
          <TableCs />
        </CardContainer>
        {/* tambah sidebar  */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Tambah data CS</DrawerHeader>

            <DrawerBody>
              <TambahCs />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </SideMenu>
    </div>
  );
};

export default CustomerService;
