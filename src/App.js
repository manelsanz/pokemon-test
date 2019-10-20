import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/pokemon" component={Home} />
      <Route path="/pokemon/:name" component={Detail} />
      <Route path="*">
        <Redirect to="/pokemon" />
      </Route>
    </Switch>
  </Router>
);

export default App;
