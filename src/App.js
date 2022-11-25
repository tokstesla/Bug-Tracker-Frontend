import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "views/Login";
import './index.css'
import Register from "views/Register";
import MainLayout from "layouts/Main";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [authLevel, setAuthLevel] = useState("");
  const [authPayload, setAuthPayload] = useState({});

  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    if (token === null) setIsAuthenticated(false);
  }, [token]);

  const setAuth = x => setIsAuthenticated(x)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/register"><Register /></Route>
        <Route path="/auth/login"><Login setAuth={setAuth} setAuthPayload={setAuthPayload} setAuthLevel={setAuthLevel} /></Route>

        <Route path="/" render={props => token !== null && isAuthenticated ? <MainLayout {...props} authLevel={authLevel} authPayload={authPayload} setAuth={setAuth} />
          : <Redirect to="/auth/login" />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
