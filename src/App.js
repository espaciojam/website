import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Cine from "./components/pages/Cine";
import Nba from "./components/pages/Nba";
import Article from "./components/pages/Article";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cine" exact component={Cine} />
          <Route path="/nba" exact component={Nba} />
          <Route path="/:path" component={Article} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
