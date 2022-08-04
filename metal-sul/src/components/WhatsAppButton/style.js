import styled from "styled-components";

export const StyledDiv = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  z-index: 1200;

  div {
    background-color: #e9e9e9;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
    display: none;

    p {
      font-size: 0.95rem;
      font-weight: 500;
    }

    @media (min-width: 700px) {
      display: block;
    }
  }

  .whats-button {
    box-shadow: 10px 10px 14px 3px rgba(0, 0, 0, 0.14);
    -webkit-box-shadow: 10px 10px 14px 3px rgba(0, 0, 0, 0.14);
    -moz-box-shadow: 10px 10px 14px 3px rgba(0, 0, 0, 0.14);

    @media (min-width: 700px) {
      width: 45px;
      height: 45px;
    }
  }
  .whats-button:hover,
  .whats-button:focus {
    background: #2db742;
  }
`;
