import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiUserCheck } from "react-icons/fi";
import CardContainer from "../../../components/container/CardContainer";
import SideMenu from "../../../components/layout/dashboard/SideMenu";
import TitleDasboardPage from "../../../components/ui/TitleDasboardPage";

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
