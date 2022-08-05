import { StyledDiv } from "./style";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Paper } from "@mui/material";

import Fade from "react-reveal/Fade";

import { useHistory } from "react-router-dom";

const OrcamentosDuvidas = () => {
  const history = useHistory();

  const goToContato = () => {
    history.push("/contato");
  };

  return (
    <StyledDiv>
      <Fade left>
        <Paper
          sx={{
            backgroundColor: "#F5F5F5",
            margin: "0 1rem",
            display: "flex",
            borderRadius: "10px",
          }}
        >
          <div className="text-div">
            <h2>ORÇAMENTO E DÚVIDAS?</h2>
            <p>
              Entre em contato conosco, nossa equipe ficará feliz em atendê-lo.
            </p>
            <div className="buttons-div">
              <a
                href="https://api.whatsapp.com/send?phone=5541995490666&text=Olá, gostaria de mais informações sobre os serviços da MetalSul."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<WhatsAppIcon />}
                  sx={{ maxWidth: "18rem" }}
                >
                  Envie-nos uma mensagem
                </Button>
              </a>
              <Button
                sx={{ textTransform: "capitalize", fontSize: "0.8rem" }}
                onClick={() => goToContato()}
              >
                Mais informações
              </Button>
            </div>
          </div>
        </Paper>
      </Fade>
    </StyledDiv>
  );
};

export default OrcamentosDuvidas;
