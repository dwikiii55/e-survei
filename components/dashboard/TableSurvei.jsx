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
    tanggal: "12-10-2021",
    response: "puas",
  },
  {
    id: 2,
    nama: "Widano",
    nip: "3485723984572394",
    jenis: "Helpdesk",
    foto: "file",
    tanggal: "12-10-2021",
    response: "puas",
  },
  {
    id: 3,
    nama: "Dwiki Krisna",
    nip: "3485723984572394",
    jenis: "Helpdesk",
    foto: "file",
    tanggal: "12-10-2021",
    response: "puas",
  },
  {
    id: 4,
    nama: "Alfian M",
    nip: "3485723984572394",
    jenis: "Helpdesk",
    foto: "file",
    tanggal: "12-10-2021",
    response: "puas",
  },
  {
    id: 5,
    nama: "Dwiki Krisna",
    nip: "3485723984572394",
    jenis: "Helpdesk",
    foto: "file",
    tanggal: "12-10-2021",
    response: "puas",
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
      </HStack>
    </>
  );
};

const TableSurvei = () => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Nama CS</Th>
            <Th>Jenis Loket</Th>
            <Th>Response</Th>
            <Th>Tanggal</Th>
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
                <Td>{value.tanggal}</Td>
                <Td>{value.response}</Td>
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

export default TableSurvei;
