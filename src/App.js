import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import MainLayout from "layouts/Main.js";
import AuthLayout from "layouts/Auth.js";
import Login from "views/Login";
import './index.css'
import Register from "views/Register";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLevel, setAuthLevel] = useState("");
  const [authStatus, setAuthStatus] = useState({});

  let token = localStorage.getItem("auth-token");

  useEffect(() => {
    if (token == null) {
      setIsAuthenticated(false);
    }
  }, [token]);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/login">
          <Login setAuth={setAuth} setAuthStatus={setAuthStatus} />
        </Route>

        <Route path="/auth/register">
          <Register />
        </Route>

        <Route
          path="/"
          render={(props) =>
            <MainLayout
              {...props}
              setAuth={setAuth}
              authLevel={authLevel}
              setAuthLevel={setAuthLevel}
            />
            // isAuthenticated && token !== null ? (
            //   <MainLayout
            //     {...props}
            //     setAuth={setAuth}
            //     authLevel={authLevel}
            //     setAuthLevel={setAuthLevel}
            //   />
            // ) : (
            //   <Redirect to="/auth/login" />
            // )
          }
        />

        <Route path="*">
          <h1>404 No page found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
