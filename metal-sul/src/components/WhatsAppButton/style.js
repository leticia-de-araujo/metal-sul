import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;

  div {
    background-color: #e9e9e9;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
    display: none;

    p {
      font-size: 0.8rem;
      font-weight: 500;
    }

    @media (min-width: 700px) {
      display: block;
    }
  }

  .whats-button {
    @media (min-width: 700px) {
      width: 42px;
      height: 42px;
    }
  }
  .whats-button:hover,
  .whats-button:focus {
    background: #2db742;
  }
`;
