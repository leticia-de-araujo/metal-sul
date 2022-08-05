import { useState } from "react";

import { useHistory } from "react-router-dom";

import { StyledAppBar, StyledBox } from "./style";

import Logo from "../../imgs/Logo.png";

import { Button, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

const Header = () => {
  const history = useHistory();

  const container = window.document.body;

  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const goToPage = (page) => {
    if (page === "inicio") {
      history.push("/");
      handleDrawerToggle();
    } else {
      history.push(`/${page}`);
      handleDrawerToggle();
    }
  };

  const listItems = (
    <>
      <li>
        <Button
          variant="text"
          color="secondary"
          sx={{ fontSize: "1rem" }}
          onClick={() => goToPage("inicio")}
        >
          Início
        </Button>
      </li>
      <li>
        <Button
          variant="text"
          color="secondary"
          sx={{ fontSize: "1rem" }}
          onClick={() => goToPage("empresa")}
        >
          Empresa
        </Button>
      </li>
      <li>
        <Button
          variant="text"
          color="secondary"
          sx={{ fontSize: "1rem" }}
          onClick={() => goToPage("servicos")}
        >
          Serviços
        </Button>
      </li>
      <li>
        <Button
          variant="text"
          color="secondary"
          sx={{ fontSize: "1rem" }}
          onClick={() => goToPage("obras")}
        >
          Obras Realizadas
        </Button>
      </li>
      <li>
        <Button
          variant="text"
          color="secondary"
          sx={{ fontSize: "1rem" }}
          onClick={() => goToPage("contato")}
        >
          Contato
        </Button>
      </li>
    </>
  );

  const drawer = (
    <StyledBox onClick={handleDrawerToggle} sx={{ width: drawerWidth }}>
      <div className="logo-closeButton">
        <Button color="secondary" onClick={() => goToPage("inicio")}>
          <img src={Logo} alt="Logo MetalSul" className="logo" />
        </Button>
        <IconButton color="secondary" onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>

      <nav>
        <ul className="ul-mobile">{listItems}</ul>
      </nav>
    </StyledBox>
  );

  return (
    <>
      <StyledAppBar>
        <Toolbar
          sx={{ justifyContent: "space-between", padding: 0, gap: "1rem" }}
        >
          <Button color="secondary" onClick={() => goToPage("inicio")}>
            <img src={Logo} alt="Logo MetalSul" className="logo-desktop" />
          </Button>

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            color="secondary"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
            <nav>
              <ul className="ul-desktop">{listItems}</ul>
            </nav>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box component="header">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "38vh",
              borderRadius: "0 0 1rem 0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
