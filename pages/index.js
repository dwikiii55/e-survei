import { Divider, Heading } from "@chakra-ui/layout";
import AppContainer from "../components/landing/AppContainer";
import CardCs from "../components/landing/CardCs";

import Header from "../components/landing/Header";

export default function Home() {
  return (
    <>
      <AppContainer>
        <Header />
        <Divider orientation="horizontal" />
        <CardCs />
      </AppContainer>
    </>
  );
}
