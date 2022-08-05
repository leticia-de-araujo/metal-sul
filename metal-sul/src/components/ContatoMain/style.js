import styled from "styled-components";

export const StyledDiv = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 64px;
  align-items: center;
  background-color: #f5f5f5;

  .content {
    width: 100%;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin: 2rem 0;
    flex: 1;

    .paper {
      background-color: white;
      color: #454649;
      padding: 1.5rem 2rem;
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      @media (min-width: 700px) {
        max-width: 44rem;
        flex-direction: row;
        gap: 3.5rem;
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

          @media (min-width: 800px) {
            font-size: 1.5rem;
          }
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

              @media (min-width: 800px) {
                font-size: 1.1rem;
              }
            }
          }
        }

        a {
          text-decoration: none;
          align-self: center;

          button {
            @media (min-width: 800px) {
              font-size: 1.1rem;
            }

            svg {
              @media (min-width: 800px) {
                font-size: 1.8rem;
              }
            }
          }
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      justify-content: center;
      width: 100%;

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
