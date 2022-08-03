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
          <p>Em que posso ajudar?</p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5541995490666&text=Olá, gostaria de mais informações sobre os serviços da Metal Sul."
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
              background: "#2db742",
              color: "white",
              width: "35px",
              height: "35px",
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
