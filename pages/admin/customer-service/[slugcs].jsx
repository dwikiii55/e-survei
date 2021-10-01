import React, { useState } from "react";
import CardContainer from "../../../components/container/CardContainer";
import SideMenu from "../../../components/layout/dashboard/SideMenu";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  ButtonGroup,
  Button,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import TitleDasboardPage from "../../../components/ui/TitleDasboardPage";
import { FiUserCheck } from "react-icons/fi";

const data = [
  {
    id: 1,
    nama: "Dwiki Krisna",
    nip: "762349712948712890",
    jenis: "TPT",
  },
];

const DetailCS = () => {
  const [ubahMode, setUbahMode] = useState(false);

  return (
    <div>
      <SideMenu>
        <TitleDasboardPage
          title="Detail Customer Service"
          icon={<FiUserCheck />}
        />

        <CardContainer maxWidth="900px">
          <ButtonGroup size="sm">
            {!ubahMode ? (
              <Button
                colorScheme="blue"
                bg="#14274E"
                onClick={() => setUbahMode(true)}
              >
                Ubah{" "}
              </Button>
            ) : (
              <Button colorScheme="red" onClick={() => setUbahMode(false)}>
                Batal
              </Button>
            )}
            <Button colorScheme="red">Hapus</Button>
          </ButtonGroup>
          <Box m={5} />
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />{" "}
          </WrapItem>
          <Box m={5} />

          <FormControl id="email">
            <FormLabel>Nama Lengkap</FormLabel>
            <Input type="email" />
          </FormControl>
          <Box m={5} />
          <FormControl id="email">
            <FormLabel>Jenis Loket</FormLabel>
            <Input type="email" />
          </FormControl>
          <Box m={5} />

          <FormControl id="email">
            <FormLabel>NIP</FormLabel>
            <Input type="email" />
          </FormControl>
          <Box m={5} />
          {ubahMode && <Button colorScheme="green">Simpan</Button>}
        </CardContainer>
      </SideMenu>
    </div>
  );
};

export default DetailCS;
