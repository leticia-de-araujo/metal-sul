import styled from "styled-components";
import obra1 from "../../imgs/obras/obra1.jpg";

export const StyledDiv = styled.div`
  margin-top: 63px;
  width: 100%;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34)),
    url(${obra1});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .text-div {
    padding: 0 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    max-width: 40rem;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);

    @media (min-width: 800px) {
      position: absolute;
      right: 3rem;
    }

    h2 {
      font-size: 2.2rem;
     

      @media (min-width: 700px) {
        font-size: 2.8rem;
      }

      span {
        border-bottom: 6px solid white;
      }
    }

    p {
      font-size: 1.2rem;

      @media (min-width: 700px) {
        font-size: 1.5rem;
      }
    }

    button {
      margin-top: 1rem;
    }
  }
`;
