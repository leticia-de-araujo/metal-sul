import styled from "styled-components";

import obra10 from "../../imgs/obras/obra10.jpg";

export const StyledHeader = styled.div`
  width: 100vw;
  overflow-x: hidden;
  height: 140px;
  background-image: url(${obra10});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    background-color: #f5f5f5e8;
    padding: 1rem;
    border-radius: 6px;

    h2 {
      color: #454649;
      letter-spacing: 1px;
      font-weight: 500;
      border-bottom: 3px solid #5177b8;
      padding-bottom: 2px;
      text-align: center;
    }
  }
`;
