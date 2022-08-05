import styled from "styled-components";
import obra3 from "../../imgs/obras/obra3.jpg";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  background-color: #f5f5f5;

  .box-mui {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;
  }

  h2 {
    color: #454649;
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: 500;
    border-bottom: 3px solid #5177b8;
    padding-bottom: 2px;
  }

  .content-conheca {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (min-width: 450px) {
      gap: 3rem;
    }

    @media (min-width: 800px) {
      flex-direction: row;
    }

    .img-div {
      width: 100%;
      height: 20vh;
      background-image: url(${obra3});
      background-color: #cccccc;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      border-radius: 4px;
      box-shadow: 10px 10px 16px -5px rgba(0, 0, 0, 0.32);
      margin-bottom: 1rem;

      @media (min-width: 350px) {
        height: 25vh;
      }

      @media (min-width: 800px) {
        width: 50%;
        height: 68vh;
      }
    }

    .text-div {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-bottom: 1rem;

      @media (min-width: 350px) {
        gap: 1rem;
        margin-bottom: 0;
      }

      @media (min-width: 800px) {
        max-width: 40vw;
      }

      p {
        font-size: 0.85rem;

        @media (min-width: 350px) {
          font-size: 1rem;
        }

        @media (min-width: 800px) {
          font-size: 1.2rem;
        }

        .estruturas {
          font-weight: 600;
        }

        .metalSul {
          font-weight: 600;
          color: #5177b8;
        }
      }
    }
  }
`;
