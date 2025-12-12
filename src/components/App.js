import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
