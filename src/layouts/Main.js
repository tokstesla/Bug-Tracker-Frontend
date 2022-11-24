import React, { useEffect } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import UniversalSidebar from "components/Sidebar/UniversalSidebar.js";
import Logo from 'assets/img/brand/white.png'

// import { useAuth } from "../contexts/AuthContext";
import routes from "routes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  // let auth = useAuth();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "admin") {
        return <Route
          path={prop.root + prop.path}
          render={() => <prop.component {...props} />}
          key={key}
        />

      } else if (prop.layout === "general") {
        return (
          <Route
            path={prop.path}
            render={() => <prop.component {...props} />}
            key={key}
          />
        );
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path.indexOf(":") !== -1) {
        if (
          props.location.pathname.indexOf(
            routes[i].layout +
            routes[i].path.slice(0, routes[i].path.indexOf(":"))
          ) !== -1
        ) {
          return routes[i].name;
        }
      } else if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return <img width={150} src={Logo} />;
  };

  return (
    <>
      <UniversalSidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/bug-tracker-logo.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>

      </div>
      <Container fluid>
        <AdminFooter />
      </Container>
    </>
  );
};

export default Admin;
