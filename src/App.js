import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import NoMatch from "./pages/NoMatch/NoMatch";
import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" >
        <Redirect to="/pokemon" />
      </Route>
      <Route path="/pokemon/:name" component={Detail} />
      <Route path="/pokemon" component={Home} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
