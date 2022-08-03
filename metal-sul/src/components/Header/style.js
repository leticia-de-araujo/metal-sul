import * as muiStyles from "@mui/material/styles";
import { AppBar, Box } from "@mui/material";

export const StyledAppBar = muiStyles.styled(AppBar)`

    width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    color: #22211B;

    .logo-desktop{
      width: 100px;
    }

    .ul-desktop {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

`;

export const StyledBox = muiStyles.styled(Box)`

    display: flex;
    flex-direction: column;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;

    .logo-closeButton {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .logo {
      width: 70px;
      }
    }

    
  
    .ul-mobile {
        list-style: none;
        display: flex;
        flex-direction: column;
    }

`;
