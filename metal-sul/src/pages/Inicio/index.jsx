import ConhecaMetalSul from "../../components/ConhecaMetalSul";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainDiv from "../../components/MainDiv";
import OrcamentosDuvidas from "../../components/OrcamentosDuvidas";
import ServicosInicio from "../../components/ServicosInicio";
import WhatsAppButton from "../../components/WhatsAppButton";
import { StyledDiv } from "./style";

const Inicio = () => {
  return (
    <StyledDiv>
      <Header />
      <MainDiv />
      <ServicosInicio />
      <ConhecaMetalSul />
      <OrcamentosDuvidas />
      <Footer />
      <WhatsAppButton />
    </StyledDiv>
  );
};

export default Inicio;
