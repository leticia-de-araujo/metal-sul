import { Button } from "@mui/material";
import { StyledDiv } from "./style";
import { useHistory } from "react-router-dom";

const ConhecaMetalSul = () => {
  const history = useHistory();

  const goToEmpresa = () => {
    history.push("/empresa");
  };
  return (
    <StyledDiv>
      <h2>CONHEÇA A METALSUL</h2>
      <div className="content-conheca">
        <div className="img-div"></div>

        <div className="text-div">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quis
            voluptatum nam, ullam veritatis, pariatur omnis molestias quas eum
            accusantium quasi fuga adipisci et laudantium non tempore impedit
            aliquid! Maiores.
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
    </StyledDiv>
  );
};

export default ConhecaMetalSul;
