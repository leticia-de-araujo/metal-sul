import { StyledHeader } from "./style";

import Fade from "react-reveal/Fade";

const Header = ({ page }) => {
  return (
    <Fade top>
      <StyledHeader>
        <div>
          {" "}
          <h2>{page}</h2>
        </div>
      </StyledHeader>
    </Fade>
  );
};

export default Header;
