import { Center, Divider, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import AppContainer from "../../components/container/AppContainer";
import ButtonSubmit from "../../components/survei/ButtonSubmit";
import CardSurvei from "../../components/survei/cardsurvei";
import PuasList from "../../components/survei/PuasList";
import RadioPilih from "../../components/survei/RadioPilih";
import TidakPuasList from "../../components/survei/TidakPuasList";

const SlugSurvei = () => {
  const [tabVal, setTabVal] = useState("");

  return (
    <>
      <AppContainer>
        <CardSurvei />
        <Divider orientation="horizontal" />
        <Center>
          <RadioPilih setTabVal={setTabVal} />
        </Center>
        {tabVal === "puas" ? <PuasList /> : <TidakPuasList />}

        <Center>
          <ButtonSubmit />
        </Center>
      </AppContainer>
    </>
  );
};

export default SlugSurvei;
