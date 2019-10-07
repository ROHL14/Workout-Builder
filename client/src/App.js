import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Exercises from "./components/exercises/Exercises";
import CreateRoutine from "./components/routines/CreateRoutine";
import AddExercise from "./components/routines/AddExercise";
import PrivateRoute from "./components/routing/PrivateRoute";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./sass/main.scss";

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
          <main>
            <Route path="/" exact component={Landing} />
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route path="/exercises" exact component={Exercises} />
              <PrivateRoute exact path="/my-routines" component={Dashboard} />
              <PrivateRoute
                path="/create-routine"
                exact
                component={CreateRoutine}
              />
              <PrivateRoute
                path="/add-exercise/:id"
                exact
                component={AddExercise}
              />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
