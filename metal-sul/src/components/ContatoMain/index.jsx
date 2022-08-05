import { StyledDiv } from "./style";
import { Button, Paper } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import obra10 from "../../imgs/obras/obra10.jpg";

import Fade from "react-reveal/Fade";

const ContatoMain = () => {
  return (
    <StyledDiv>
      <Fade right>
        <h2>Contato</h2>
      </Fade>
      <Fade bottom className="fade">
        <div className="content">
          <Paper className="paper">
            <div className="text">
              {" "}
              <h4>Fale conosco através do WhatsApp ou Email</h4>
              <ul>
                <li>
                  <WhatsAppIcon sx={{ color: "#5177b8" }} />
                  <p>(41) 995490001</p>
                </li>
                <li>
                  <EmailIcon sx={{ color: "#5177b8" }} />{" "}
                  <p>metalsul1@hotmail.com</p>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5541995490666&text=Olá, gostaria de mais informações sobre os serviços da MetalSul."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<WhatsAppIcon />}
                  size="large"
                >
                  Envie-nos uma mensagem
                </Button>
              </a>
            </div>
            <div className="info">
              <h4>Mais informações</h4>
              <ul>
                <li>
                  <PlaceIcon sx={{ color: "#5177B8" }} />
                  <p>
                    Rua Regina de Jesus Siqueira, 128 Curitiba - PR | CEP
                    81935390
                  </p>
                </li>
                <li>
                  <AccessTimeIcon sx={{ color: "#5177B8" }} />
                  <p>Atendimento de Segunda à Sexta - 08:00 - 18:00</p>
                </li>
              </ul>
            </div>
          </Paper>
          <img src={obra10} alt="Estrutura metálica" />
        </div>
      </Fade>
    </StyledDiv>
  );
};

export default ContatoMain;
