import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import ExercisesList from "./components/ExercisesList";
import Builder from "./components/Builder";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={Landing} />
            <Route path="/exercises" exact component={ExercisesList} />
            <Route path="/builder" exact component={Builder} />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
