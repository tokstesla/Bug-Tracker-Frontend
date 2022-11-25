import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "views/Login";
import './index.css'
import Register from "views/Register";
import MainLayout from "layouts/Main";
import API from "utils/API";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [authPayload, setAuthPayload] = useState({});
  const [authLevel, setAuthLevel] = useState("");

  const token = localStorage.getItem("auth-token");


  useEffect(() => {
    if (token === null) setIsAuthenticated(false)
    const { role, user_id } = API.getPayload()
    setAuthPayload({ role, user_id })
    setAuthLevel(role)
  }, [token, isAuthenticated]);

  const setAuth = x => setIsAuthenticated(x)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/register"><Register /></Route>
        <Route path="/auth/login"><Login setAuth={setAuth} setAuthPayload={setAuthPayload}/></Route>

        <Route path="/" render={props => token !== null && isAuthenticated ? <MainLayout {...props} authLevel={authLevel} authPayload={authPayload} setAuth={setAuth} />
          : <Redirect to="/auth/login" />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
