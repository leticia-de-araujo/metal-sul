import { StyledMain } from "./style";

import { Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import HeaderPage from "../HeaderPage";

import Fade from "react-reveal/Fade";

import servicos from "../../data/servicos";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ServicosMain = () => {
  return (
    <StyledMain>
      <HeaderPage page={"Serviços"} />

      {servicos.map((servico) => (
        <Fade key={servico.id}>
          <div className="content-servicos">
            <div className="swiper-div">
              <Swiper
                slidesPerView={1}
                spaceBetween={15}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
        
                  <img
                    src={servico.img}
                    alt={servico.nome}
                    className="servico-img"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-div">
              <h4>{servico.nome}</h4>
              <p>Descrição do serviço</p>

              <a
                href="https://api.whatsapp.com/send?phone=5541995490666&text=Olá, gostaria de mais informações sobre os serviços da MetalSul."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  size="large"
                >
                  Fale conosco
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
