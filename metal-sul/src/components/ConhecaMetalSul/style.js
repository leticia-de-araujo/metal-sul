import styled from "styled-components";
import obra3 from "../../imgs/obras/obra3.jpg";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 63px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  align-items: center;
  background-color: #f5f5f5;

  h2 {
    color: #454649;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 500;
    border-bottom: 3px solid #5177b8;
    padding-bottom: 2px;
    margin-bottom: 1.5rem;

    @media (min-width: 800px) {
      margin-bottom: 6rem;
      margin-top: 1rem;
    }
  }

  .content-conheca {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 800px) {
      flex-direction: row;
      gap: 3rem;
    }

    .img-div {
      width: 100%;
      height: 18rem;
      background-image:
       /* linear-gradient(
          rgba(0, 0, 0, 0.34),
          rgba(0, 0, 0, 0.34)
        ), */ url(${obra3});
      background-color: #cccccc;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      border-radius: 5px;
      box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.32);

      @media (min-width: 800px) {
        width: 50%;
        height: 25rem;
      }
    }

    .text-div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media (min-width: 800px) {
        width: 50%;
      }

      p {
        width: 100%;
      }
    }
  }
`;
