import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import MyHabits from "./components/MyHabits";
import Register from "./components/User/Register";
import Signin from "./components/User/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Welcome} exact={true} />
      <Route path="/habits" component={MyHabits} exact={true} />
      <Route path="/register" component={Register} exact={true} />
      <Route path="/signin" component={Signin} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;