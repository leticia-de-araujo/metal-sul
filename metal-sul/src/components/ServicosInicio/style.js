import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 63px);
  height: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  color: #454649;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;

  h2 {
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: 500;
    border-bottom: 3px solid #5177b8;
    padding-bottom: 2px;
  }

  .swiper-div {
    width: 100%;

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

      .servico-div {
        border-radius: 4px;
        color: white;
        font-size: 1.2rem;
        width: 24rem;
        height: 61vh;
        background-color: #cccccc;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        @media (min-width: 800px) {
          width: 30rem;
          height: 67vh;
        }

        @media (min-width: 1200px) {
          width: 35rem;
          height: 70vh;
        }

        &:hover {
          font-size: 1.35rem;
        }

        h3 {
          font-weight: 600;
        }

        .saiba-mais {
          text-transform: capitalize;
          color: white;
          outline: 1px solid white;
          padding: 2px 4px;
          font-size: 0.7rem;
        }
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
