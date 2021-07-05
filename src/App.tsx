import React from "react";
import cookie from "react-cookies";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import Login from "./features/auth/components/Login";

import Dashboard from "./features/chat-window/components/Dashboard";

// import "./App.css";
import { AUTH_ACCESS_TOKEN } from "./features/auth/constants/auth.keys";

function App() {
  const token = cookie.load(AUTH_ACCESS_TOKEN);
  // if (!token) {
  //   return <Login />;
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          {token ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
