import Header from "../../components/Header";
import MainDiv from "../../components/MainDiv";
import WhatsAppButton from "../../components/WhatsAppButton";
import { StyledDiv } from "./style";

const Inicio = () => {
  return (
    <StyledDiv>
      <Header />
      <MainDiv />
      <WhatsAppButton />
    </StyledDiv>
  );
};

export default Inicio;
