import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import HeyDiv from "./components/HeyDiv";
import CardBootstrap from "./components/CardBootstrap";

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col style={{ padding: "0px" }} sm lg="2">
          <div style={{ height: "55px", background: "red" }}></div>
          <div>
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
            <HeyDiv />
          </div>
        </Col>
        <Col sm lg style={{ padding: "0px" }}>
          <Navbar bg="dark" style={{ margin: "0px" }}>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
          </Navbar>
          <Container style={{ padding: "15px" }}>
            <Row>
              <Col>
                <h1>DASHBOARD</h1>
                <p>This is the dashboard</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardBootstrap height="150px" width="318px" />
              </Col>
              <Col>
                <CardBootstrap height="150px" width="318px" />
              </Col>
              <Col>
                <CardBootstrap height="150px" width="318px" />
              </Col>
            </Row>
            <Row style={{ padding: "20px 0px" }}>
              <Col>
                <CardBootstrap height="250px" width="825px" />
              </Col>
              <Col>
                <Row style={{ padding: "0px 10px" }}>
                  <Col lg style={{ background: "red", height: "50px" }}>
                    1
                  </Col>
                  <Col lg="1"></Col>
                  <Col lg style={{ background: "red", height: "50px" }}>
                    3
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
