import { StyledDiv } from "./style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

const MainDiv = () => {
  const history = useHistory();

  const goToServicos = () => {
    history.push("/servicos");
  };

  return (
    <StyledDiv>
      <Fade right duration={1000}>
        <div className="text-div">
          <h2>
            Segurança e <span>qualidade</span>
          </h2>
          <p>
            Somos uma empresa com mais de 10 anos de história, especializada em
            oferecer estruturas metálicas de qualidade.
          </p>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            sx={{ textTransform: "capitalize" }}
            onClick={() => goToServicos()}
          >
            Nossos Serviços
          </Button>
        </div>
      </Fade>
    </StyledDiv>
  );
};

export default MainDiv;
