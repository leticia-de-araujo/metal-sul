import ConhecaMetalSul from "../../components/ConhecaMetalSul";
import Footer from "../../components/Footer";
import MainDiv from "../../components/MainDiv";
import NavBar from "../../components/NavBar";
import OrcamentosDuvidas from "../../components/OrcamentosDuvidas";
import ServicosInicio from "../../components/ServicosInicio";
import WhatsAppButton from "../../components/WhatsAppButton";
import { StyledDiv } from "./style";

const Inicio = () => {
  return (
    <StyledDiv>
      <NavBar/>
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
