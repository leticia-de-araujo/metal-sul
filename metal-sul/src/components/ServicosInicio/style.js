import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 63px);
  padding: 1rem;
  background-color: #f5f5f5;
  color: #454649;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.3rem;
    letter-spacing: 1px;
    font-weight: 500;
    border-bottom: 3px solid #5177b8;
    padding-bottom: 2px;

    @media (min-width: 800px) {
      margin-top: 1rem;
    }
  }

  .swiper-div {
    width: 100%;
    height: 85vh;

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
        height: 90%;
        background-color: #cccccc;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 800px) {
          width: 28rem;
          height: 28rem;
        }

        &:hover {
          font-size: 1.5rem;
        }

        h3 {
          font-weight: 600;
        }

        button {
          span {
            margin-left: 2px;
          }
        }
      }
    }

    .swiper-pagination-bullets {
      bottom: 0;
    }

    .swiper-pagination-bullet-active {
      background: #5177b8;
    }
  }
`;
