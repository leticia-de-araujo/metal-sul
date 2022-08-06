import styled from "styled-components";

import empresa from "../../imgs/empresa.jpg";

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

  .content-empresa {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;
    flex: 1;

    @media (min-width: 450px) {
      gap: 3rem;
    }

    @media (min-width: 800px) {
      flex-direction: row;
      margin: 1rem 0;
    }

    .img-div {
      width: 100%;
      min-height: 26vh;
      background-image: url(${empresa});
      background-color: #cccccc;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      border-radius: 4px;
      box-shadow: 10px 10px 16px -5px rgba(0, 0, 0, 0.32);

      @media (min-width: 800px) {
        width: 47%;
        height: 62vh;
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
          font-size: 1.3rem;
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
