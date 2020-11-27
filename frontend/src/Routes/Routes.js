import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
import Single from "../Components/Single";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={(props) => <Login {...props} />} />
        <Route path="/dashboard" render={(props) => <Dashboard />} />
        <Route path="/single" render={() => <Single />} />
      </Switch>
    </>
  );
};