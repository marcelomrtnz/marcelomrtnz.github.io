import "./styles.css";
import "./theme/pantallaPrincipal.css"

import { BrowserRouter as Router, Route } from "react-router-dom";

import PantallaPrincipal from "./app/inicio/PantallaPrincipal";

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <PantallaPrincipal />
      </Route>
    </Router>
  );
}
