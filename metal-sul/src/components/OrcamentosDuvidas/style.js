import styled from "styled-components";
import obra7 from "../../imgs/obras/obra7.jpg";

export const StyledDiv = styled.div`
  min-height: calc(100vh - 63px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  background-image: linear-gradient(
      rgba(81, 119, 194, 0.8),
      rgba(81, 119, 194, 0.8)
    ),
    url(${obra7});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .text-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 1rem;

    @media (min-width: 800px) {
      padding: 2rem;
    }

    h2 {
      font-size: 1.3rem;
      letter-spacing: 1px;
      font-weight: 500;
      border-bottom: 3px solid #5177b8;
      padding-bottom: 2px;
    }

    p {
      text-align: center;
    }

    .buttons-div {
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      @media (min-width: 350px) {
        gap: 1rem;
      }

       a {
        text-decoration: none;
       }
    }
  }
`;
