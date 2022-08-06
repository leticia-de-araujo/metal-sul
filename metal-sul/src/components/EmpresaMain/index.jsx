import { StyledMain } from "./style";

import HeaderPage from "../HeaderPage";

import Fade from "react-reveal/Fade";

const EmpresaMain = () => {
  return (
    <StyledMain>
      <HeaderPage page={"Sobre a Empresa"} />
      <Fade bottom>
        <div className="content-empresa">
          <div className="img-div"></div>

          <div className="text-div">
            <p>
              A <span className="metalSul">MetalSul</span> metalúrgica é uma
              empresa fundada em 2011, especializada em{" "}
              <span className="estruturas">estruturas metálicas</span>.
            </p>
            <p>
              Desde então, nos consolidamos na montagem de estruturas para
              Shoppings Centers, tendo nesses anos de atuação construído
              estruturas para 9 Shoppings e uma grande quantidade de Mezaninos,
              além de outras obras especiais.
            </p>
            <p>
              {" "}
              Na <span className="metalSul">MetalSul</span>, entregamos soluções
              completas para os nossos clientes, sempre prezando pela qualidade
              e segurança de nossos serviços.
            </p>
          </div>
        </div>
      </Fade>
    </StyledMain>
  );
};

export default EmpresaMain;
