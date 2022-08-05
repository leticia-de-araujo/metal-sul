import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { StyledDiv } from "./style";
import Pulse from "react-reveal/Pulse";

const WhatsAppButton = () => {
  return (
    <StyledDiv>
      <Pulse>
        <div>
          {" "}
          <p>Em que podemos ajudar?</p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5541995490001&text=Olá, gostaria de mais informações sobre os serviços da MetalSul."
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              background: "#2db742",
              color: "white",
              width: "45px",
              height: "45px",
            }}
            className="whats-button"
          >
            <WhatsAppIcon />
          </IconButton>
        </a>
      </Pulse>
    </StyledDiv>
  );
};

export default WhatsAppButton;
