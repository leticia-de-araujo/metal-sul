import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 64px;
  align-items: center;
  background-color: #f5f5f5;

  .content-servicos {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
    padding: 1rem;

    @media (min-width: 600px) {
      flex-direction: row;
      gap: 3.5rem;
    }

    .text-div {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-bottom: 1rem;
      width: 100%;

      @media (min-width: 350px) {
        gap: 1rem;
        margin-bottom: 0;
      }

      @media (min-width: 600px) {
        width: 20rem;
      }

      p {
        font-size: 0.85rem;

        @media (min-width: 350px) {
          font-size: 1rem;
        }

        @media (min-width: 800px) {
          font-size: 1.3rem;
        }
      }

      a {
        text-decoration: none;
      }
    }
  }

  .swiper-div {
    width: 100%;
    max-width: 40rem;

    @media (min-width: 600px) {
      width: 50%;
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 1.125rem;
      color: black;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;

      .servico-img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #f5f5f5;
    }

    .swiper-pagination-bullets {
      bottom: 4px;
    }

    .swiper-pagination-bullet-active {
      background: white;
    }
  }
`;
