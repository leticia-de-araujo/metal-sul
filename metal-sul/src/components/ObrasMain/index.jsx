import obras from "../../data/obras";

import HeaderPage from "../HeaderPage";

import { StyledMain } from "./style";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { Paper } from "@mui/material";

import Fade from "react-reveal/Fade";

const ObrasMain = () => {
  return (
    <StyledMain>
      <HeaderPage page={"Obras Realizadas"} />
      <div className="obras-content">
        <Fade left>
          <h3>
            Algumas das obras realizadas pela MetalSul ao longo dos seus 11 anos
            de história.
          </h3>
        </Fade>

        {obras.map((obra) => (
          <Fade key={obra.nome}>
            <Paper className="paper">
              <div className="obra-div">
                <div classname="obra-info">
                  <h4 className="obra-nome">{obra.nome}</h4>
                  <h5 className="obra-local-data">{obra.localData}</h5>
                </div>

                <ImageGallery items={obra.images} className="obra-gallery" />
              </div>
            </Paper>
          </Fade>
        ))}
      </div>
    </StyledMain>
  );
};

export default ObrasMain;
