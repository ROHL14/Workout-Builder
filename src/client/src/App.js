import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Navigation from "./components/Navigation";
import CreateUser from "./components/CreateUser";
import ExercisesList from "./components/ExercisesList";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Layout} exact />
      <Route path="/exercises" component={ExercisesList} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
