import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Layout from "./pages/Layout";
import ExercisesList from "./components/ExercisesList";
import Builder from "./components/Builder";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route path="/" exact component={Layout} />
            <Route path="/exercises" exact component={ExercisesList} />
            <Route path="/builder" exact component={Builder} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
