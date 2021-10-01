import { Heading } from "@chakra-ui/layout";
import AppContainer from "../components/landing/AppContainer";
import CardLanding from "../components/landing/CardLanding";

import Header from "../components/landing/Header";

export default function Home() {
  return (
    <>
      <AppContainer>
        <Header />
        <CardLanding />
      </AppContainer>
    </>
  );
}
