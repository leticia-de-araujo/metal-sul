import { Route, Switch } from "react-router-dom";
import Contato from "../pages/Contato";
import Empresa from "../pages/Empresa";
import Inicio from "../pages/Inicio";
import ObrasRealizadas from "../pages/ObrasRealizadas";
import Servicos from "../pages/Servicos";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Inicio />
      </Route>

      <Route exact path="/empresa">
        <Empresa />
      </Route>

      <Route exact path="/servicos">
        <Servicos />
      </Route>

      <Route exact path="/obras">
        <ObrasRealizadas />
      </Route>

      <Route exact path="/contato">
        <Contato />
      </Route>

      {/* TODO Página 404? */}
    </Switch>
  );
};

export default Routes;
