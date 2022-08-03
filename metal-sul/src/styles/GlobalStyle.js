import { createGlobalStyle } from "styled-components";

import { createTheme } from "@mui/material/styles";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5177B8",
    },
    secondary: {
      main: "#454649",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
