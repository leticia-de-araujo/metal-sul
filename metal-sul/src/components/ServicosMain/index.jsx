import { StyledMain } from "./style";

import { Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import HeaderPage from "../HeaderPage";

import Fade from "react-reveal/Fade";

import servicos from "../../data/servicos";

const ServicosMain = () => {
  return (
    <StyledMain>
      <HeaderPage page={"Serviços"} />

      {servicos.map((servico) => (
        <Fade key={servico.id}>
          <div className="content-servicos">
            <div
              className="servico-img"
              style={{
                backgroundImage: ` url(${servico.img})`,
              }}
            ></div>
            <div className="text-div">
              <h4>{servico.nome}</h4>
              <p>{servico.descricao[0]}</p>
              {servico.descricao[1] && <p>{servico.descricao[1]}</p>}
              {servico.descricao[2] && <p>{servico.descricao[2]}</p>}

              <a
                href="https://api.whatsapp.com/send?phone=5541995490001&text=Olá, gostaria de mais informações sobre os serviços da MetalSul."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  size="large"
                  className="orcamento"
                >
                  Solicite um orçamento
                </Button>
              </a>
            </div>
          </div>
        </Fade>
      ))}
    </StyledMain>
  );
};

export default ServicosMain;
