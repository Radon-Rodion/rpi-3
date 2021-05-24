import React, {Component} from 'react';
import {Navbar, Container, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import logo from './logo.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Person from "../pages/Person";
import info from "../Jsons/info.json";

export default class Header extends Component {

  render(){
    return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src = {logo}
              height = "40" width = "60"
              className = "d-inline-block align-top"
              alt = "Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href = "/"> {info.home} </Nav.Link>
            </Nav>
            <NavDropdown title={info.persons} id="nav-dropdown">
              <NavDropdown.Item href = "/1">{info.name1}</NavDropdown.Item>
              <NavDropdown.Item href = "/2">{info.name2}</NavDropdown.Item>
              <NavDropdown.Item href = "/3">{info.name3}</NavDropdown.Item>
              <NavDropdown.Item href = "/4">{info.name4}</NavDropdown.Item>
              <NavDropdown.Item href = "/5">{info.name5}</NavDropdown.Item>
              <NavDropdown.Item href = "/6">{info.name6}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href = "/all">{info.search}</NavDropdown.Item>
            </NavDropdown>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/1" render={ (props) => <Person id="1" />} />
          <Route exact path = "/2" render={ (props) => <Person id="2" />} />
          <Route exact path = "/3" render={ (props) => <Person id="3" />} />
          <Route exact path = "/4" render={ (props) => <Person id="4" />} />
          <Route exact path = "/5" render={ (props) => <Person id="5" />} />
          <Route exact path = "/6" render={ (props) => <Person id="6" />} />
          <Route exact path = "/all" component = {Search}/>
        </Switch>
      </Router>
    </>
    )
  }
}
