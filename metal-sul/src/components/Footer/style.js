import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #22211b;
  font-size: 1rem;
  padding: 1rem;
  position: relative;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 800px) {
      width: calc(100vw - 250px);
      max-width: 35rem;
      flex-direction: row;
      align-self: flex-start;
      margin-left: 1rem;
      gap: 2rem;
    }

    @media (min-width: 900px) {
      justify-content: center;
      gap: 4rem;
      max-width: 55rem;
    }

    @media (min-width: 1200px) {
      gap: 6rem;
      margin-left: 6vw;
    }

    @media (min-width: 1500px) {
      gap: 8rem;
      margin-left: 6vw;
      max-width: 65rem;
    }
  }

  .contato,
  .servicos {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 1rem 0;

    h4 {
      font-size: 1.1rem;
      letter-spacing: 1px;
      font-weight: 500;
      border-bottom: 3px solid #5177b8;
      padding-bottom: 2px;
      width: fit-content;

      @media (min-width: 800px) {
        font-size: 1.15rem;
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        display: flex;
        gap: 6px;
        max-width: 22rem;
        align-items: center;
      }
    }
  }

  img {
    width: 140px;
    margin: 0.7rem 0;

    @media (min-width: 800px) {
      position: absolute;
      top: 18%;
      right: 2rem;
      width: 180px;
    }

    @media (min-width: 1000px) {
      right: 4rem;
      width: 190px;
    }

    @media (min-width: 1200px) {
      right: 10vw;
      width: 200px;
    }

    @media (min-width: 1500px) {
      right: 15vw;
      width: 215px;
    }
  }

  .direitos {
    text-align: center;
    border-top: 1px solid #c8c8c8;
    padding-top: 10px;
    margin-top: 1rem;
    font-size: 0.95rem;
    width: 100%;
  }
`;
