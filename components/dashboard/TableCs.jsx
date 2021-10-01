import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

const Cs = [
  {
    id: 1,
    nama: "Dwiki Krisna",
    nip: "3485723984572394",
    jenis: "Helpdesk",
    foto: "file",
  },
  {
    id: 2,
    nama: "Alfian M",
    nip: "3485723984572394",
    jenis: "TPT",
    foto: "file",
  },
  {
    id: 3,
    nama: "Widan",
    nip: "3485723984572394",
    jenis: "Helpdesk",
    foto: "file",
  },
  {
    id: 4,
    nama: "Agus",
    nip: "3485723984572394",
    jenis: "TPT",
    foto: "file",
  },
  {
    id: 5,
    nama: "Marni",
    nip: "3485723984572394",
    jenis: "Helpdesk",
    foto: "file",
  },
];

const AksiMenu = ({ id }) => {
  return (
    <>
      <HStack spacing={1}>
        <Tooltip label="Delete Data" hasArrow bg="#394867" p={2}>
          <IconButton
            size="sm"
            icon={<FiTrash />}
            variant="solid"
            color="red"
          />
        </Tooltip>
        <Tooltip label="Detail Data" hasArrow bg="#394867" p={2}>
          <IconButton
            size="sm"
            icon={<FiEye />}
            variant="link"
            variant="solid"
          />
        </Tooltip>
        <Tooltip label="Detail Data" hasArrow bg="#394867" p={2}>
          <IconButton
            size="sm"
            icon={<FiEdit />}
            variant="link"
            variant="solid"
          />
        </Tooltip>
      </HStack>
    </>
  );
};

const TableCs = () => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Nama</Th>
            <Th>Jenis</Th>
            <Th>NIP</Th>
            <Th>Aksi</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Cs.map((value) => {
            console.log(value);
            return (
              <Tr key={value.id}>
                <Td>{value.nama}</Td>
                <Td>{value.jenis}</Td>
                <Td>{value.nip}</Td>
                <Td>
                  <AksiMenu id={value.id} />{" "}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default TableCs;
