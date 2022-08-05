import { StyledFooter } from "./style";

import logo from "../../imgs/Logo.png";

import PlaceIcon from "@mui/icons-material/Place";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import servicos from "../../data/servicos";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <StyledFooter>
      <Fade right>
        {" "}
        <img src={logo} alt="Logo MetalSul" className="logo" />
      </Fade>
      <Fade bottom>
        <div className="text">
          <div className="contato">
            <h4>Contato</h4>
            <ul>
              <li>
                <PlaceIcon sx={{ color: "#5177B8" }} />
                <p>
                  Rua Regina de Jesus Siqueira, 128 Curitiba - PR | CEP 81935390
                </p>
              </li>
              <li>
                <WhatsAppIcon sx={{ color: "#5177B8" }} />
                <p>(41) 995490001</p>
              </li>
              <li>
                <EmailIcon sx={{ color: "#5177B8" }} />{" "}
                <p>metalsul1@hotmail.com</p>
              </li>
              <li>
                <AccessTimeIcon sx={{ color: "#5177B8" }} />
                <p>Segunda à Sexta - 08:00 - 18:00</p>
              </li>
            </ul>
          </div>
          <div className="servicos">
            <h4>Serviços</h4>
            <ul>
              {servicos.map((servico) => (
                <li key={servico.id}>{servico.nome}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="direitos">
          © 2022 | MetalSul – Todos os direitos reservados.
        </p>
      </Fade>
    </StyledFooter>
  );
};

export default Footer;
