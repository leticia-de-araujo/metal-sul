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

  .obras-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0;
    padding: 1rem;
    flex: 1;

    h3 {
      color: #454649;
      letter-spacing: 1px;
      font-weight: 600;
      text-align: center;

      @media (min-width: 800px) {
        width: 70%;
      }
    }

    .paper {
      padding: 1rem;
      width: 96vw;

      @media (min-width: 800px) {
        width: 70vw;
      }

      .obra-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        color: #5177b8;
        text-align: center;

        h4 {
          font-weight: 600;
          color: #454649;
        }

        h5 {
          font-weight: 500;
        }

        .obra-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: fit-content;
          text-align: center;
        }

        .obra-gallery,
        .image-gallery {
          width: 90vw;

          @media (min-width: 800px) {
            width: 60vw;
          }
        }
      }
    }
  }
`;
