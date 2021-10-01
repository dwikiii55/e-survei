import { Box } from "@chakra-ui/layout";
import React from "react";
import CardContainer from "../../components/container/CardContainer";
import TableCs from "../../components/dashboard/TableCs";
import ChartPertumbuhan from "../../components/layout/dashboard/ChartPertumbuhan";
import SideMenu from "../../components/layout/dashboard/SideMenu";

const Admin = () => {
  return (
    <>
      <SideMenu>
        <CardContainer maxWidth="500px">
          <ChartPertumbuhan />
        </CardContainer>
        <Box m={5} />
        <CardContainer>
          <TableCs />
        </CardContainer>
      </SideMenu>
    </>
  );
};

export default Admin;
