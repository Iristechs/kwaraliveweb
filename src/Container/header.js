import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Register from "../Pages/register";
import Home from "../Pages/Home";
import "bootstrap/dist/css/bootstrap.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = ()=> {
    return(
        <Router>
            <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                Kwara Live
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </Nav>

             

              {/* <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav> */}
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
              <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>

        </Router>
    );
};
export default Header;