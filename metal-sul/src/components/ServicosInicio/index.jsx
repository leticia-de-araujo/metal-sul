import { StyledDiv } from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import servicos from "../../data/servicos";

import Fade from "react-reveal/Fade";

import { Button } from "@mui/material";

const ServicosInicio = () => {
  return (
    <StyledDiv>
      <Fade right>
        {" "}
        <h2>SERVIÇOS</h2>
      </Fade>

      <Fade bottom>
        <div className="swiper-div">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              720: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {servicos?.map((servico) => (
              <SwiperSlide key={servico.id}>
                <div
                  className="servico-div"
                  style={{
                    backgroundImage: `linear-gradient(rgba(81, 119, 194, 0.644), rgba(81, 119, 194, 0.644)), url(${servico.img})`,
                  }}
                >
                  <h3>{servico.nome}</h3>
                  <Button
                    variant="text"
                    className="saiba-mais"
                    // TODO Adicionar funcionalidade nos botões
                  >
                    Saiba mais
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fade>
    </StyledDiv>
  );
};

export default ServicosInicio;
