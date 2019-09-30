import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Exercises from "./components/exercises/Exercises";
import Builder from "./components/Builder";
import AddExercise from "./components/routines/AddExercise";
import PrivateRoute from "./components/routing/PrivateRoute";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route path="/" exact component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/exercises" exact component={Exercises} />
            <PrivateRoute exact path="/my-routines" component={Dashboard} />
            <PrivateRoute path="/builder" exact component={Builder} />
            <PrivateRoute
              path="/add-exercise/:id"
              exact
              component={AddExercise}
            />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
