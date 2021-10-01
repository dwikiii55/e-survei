import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";

const TambahCs = () => {
  return (
    <>
      <Box>
        <Input placeholder="Nama Lengkap" />
        <Box m={5} />

        <Select placeholder="Jenis">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <Box m={5} />

        <Input placeholder="NIP" />
        <Box m={5} />

        <Button>Submit</Button>
      </Box>
    </>
  );
};

export default TambahCs;
