import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import ProjectsTable from "../components/Tables/ProjectsTable";
import TicketsPieChart from "components/Charts/TicketsPieChart";
import API from "../utils/API";

const Index = (props) => {
  console.log('value of user role', props.authLevel)
  const [userTickets, setUserTickets] = useState([]);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  useEffect(() => {
    //flag for async useEffect cleanup
    const abortController = new AbortController();

    //TODO: fetch user tickets. create backend and front end route
    async function fetchUserTickets() {
      try {
        const userTicketsRes = await (
          await API.getUserTickets(abortController)
        ).json();

        setUserTickets(userTicketsRes);
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.log("Error fetching user tickets", err);
        }
      }
    }

    fetchUserTickets();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 h-100" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <ProjectsTable />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xl="4" className="mb-2">
            <TicketsPieChart userTickets={userTickets} focus={"type"} />
          </Col>
          <Col xl="4" className="mb-2">
            <TicketsPieChart userTickets={userTickets} focus={"priority"} />
          </Col>
          <Col xl="4" className="mb-2">
            <TicketsPieChart userTickets={userTickets} focus={"status"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
