import { Divider, Heading } from "@chakra-ui/layout";
import React from "react";
import AppContainer from "../../components/container/AppContainer";
import CardSurvei from "../../components/survei/cardsurvei";
import PilihSurvei from "../../components/survei/pilihSurvei";

const SlugSurvei = () => {
  return (
    <>
      <AppContainer>
        <CardSurvei />
        <Divider orientation="horizontal" />
        <PilihSurvei />
      </AppContainer>
    </>
  );
};

export default SlugSurvei;
