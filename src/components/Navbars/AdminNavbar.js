import React from "react";
// reactstrap components#
import './AdminNavbar.css'

import { Navbar, Container } from "reactstrap";

const AdminNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <div className="h1 mb-0 text-white text-uppercase d-none d-lg-inline-block">
            <img className="navbar-image" src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
