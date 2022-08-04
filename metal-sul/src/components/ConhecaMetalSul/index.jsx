import { Button } from "@mui/material";

import { StyledDiv } from "./style";

import { useHistory } from "react-router-dom";

import Fade from "react-reveal/Fade";

const ConhecaMetalSul = () => {
  const history = useHistory();

  const goToEmpresa = () => {
    history.push("/empresa");
  };
  return (
    <StyledDiv>
      <Fade right>
        <h2>CONHEÇA A METALSUL</h2>
      </Fade>
      <Fade bottom>
        <div className="content-conheca">
          <div className="img-div"></div>

          <div className="text-div">
            <p>
              Somos uma empresa especializada em{" "}
              <span className="estruturas">estruturas metálicas</span>, com
              larga experiência em estruturas de Shoppings Centers, Barracões e
              Mezaninos.
            </p>
            <p>
              {" "}
              Na <span className="metalSul">MetalSul</span>, entregamos soluções
              completas para sua empresa, condomínio ou residência, sempre
              prezando pela qualidade e segurança de nossos serviços.
            </p>

            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", maxWidth: "10rem" }}
              onClick={() => goToEmpresa()}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </Fade>
    </StyledDiv>
  );
};

export default ConhecaMetalSul;
