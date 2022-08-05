import styled from "styled-components";
import obra10 from "../../imgs/obras/obra10.jpg";
export const StyledDiv = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin-top: 1.5rem;
  align-items: center;
  background-color: #f5f5f5;
  gap: 2rem;

  h2 {
    letter-spacing: 1px;
    font-weight: 500;
    border-bottom: 3px solid #5177b8;
    padding-bottom: 2px;
  }

  .paper {
    background-color: white;
    color: #454649;
    padding: 1.5rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 800px) {
      max-width: 50rem;
    }

    .content {
      padding: 1.5rem;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;

      @media (min-width: 600px) {
        width: auto;
      }

      .text {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1.5rem;

        h4 {
          font-weight: 600;
          border-bottom: 3px solid #5177b8;
          padding-bottom: 4px;
          width: fit-content;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 0.8rem;

          li {
            display: flex;
            align-items: center;
            gap: 8px;
            list-style: none;
            font-weight: 500;
            flex-wrap: wrap;

            p {
              font-size: 0.85rem;
            }
          }
        }

        a {
          text-decoration: none;
          align-self: center;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h4 {
        font-weight: 600;
        border-bottom: 3px solid #5177b8;
        padding-bottom: 4px;
        width: fit-content;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #5177b8;
        font-weight: 500;

        li {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;

          p {
            font-size: 0.85rem;
          }
        }
      }
    }
  }
`;
