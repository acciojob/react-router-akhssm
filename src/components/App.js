import React from "react";
import { Switch, Route } from "react-router-dom";  // v5
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
