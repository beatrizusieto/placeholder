import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Imagenes from "./components/Imagenes"

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
				<Route exact path="/">
           <Imagenes></Imagenes>
        </Route>
				</Switch>
      </Router>
    </div>
  );
}

export default App;
