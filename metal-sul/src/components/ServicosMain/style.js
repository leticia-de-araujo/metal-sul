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
    margin: 1rem 0;
    padding: 1rem;
    flex: 1;

    @media (min-width: 600px) {
      flex-direction: row;
      gap: 3.5rem;
    }

    .servico-img {
      width: 100%;
      height: 30vh;
      background-color: #cccccc;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 16px -5px rgb(0 0 0 / 32%);

      @media (min-width: 600px) {
        width: 50%;
        height: 65vh;
      }
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

      @media (min-width: 900px) {
        width: 30rem;
      }

      h4 {
        color: #454649;
        border-bottom: 3px solid #5177b8;
        padding-bottom: 4px;
        width: fit-content;
      }

      p {
        font-size: 0.85rem;
        color: #454649;

        @media (min-width: 350px) {
          font-size: 1rem;
        }
      }

      a {
        text-decoration: none;
        margin-top: 0.5rem;

        .orcamento {
          background-color: #2db742;
          text-transform: capitalize;
        }
      }
    }
  }
`;
