import React, {Component} from 'react';
import {Navbar, Container, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import logo from './logo.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Person from "../pages/Person";
import info from "../Jsons/info.json";
import infoRus from "../Jsons/infoRus.json";
//import Info from "./Info";

export default class Header extends Component {

  state = {
    info: info,
    lang: 0
  }

  constructor(props) {
    super(props);
    if(this.props.lang == 1){
      this.state.info = infoRus;
      this.state.lang = 1;
    } else if(this.props.lang == 0){
      this.state.info = info;
      this.state.lang = 0;
    }
    console.log(logo);
  }

  changeLang(lang){

    if(lang==0){
      this.setState({info: info, lang: lang});
      //console.log(lang);
    } else {
      this.setState({info: infoRus, lang: lang});
    }
    //console.log(this.state.lang);
  }

  checkProcess0 = (e) => {if(e.target.checked) this.changeLang(0)}
  checkProcess1 = (e) => {if(e.target.checked) this.changeLang(1)}

  render(){
    //console.log(this.state.lang);
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
              <Nav.Link href = "/"> {this.state.info.home} </Nav.Link>
            </Nav>
            <NavDropdown title={this.state.info.persons} id="nav-dropdown">
              <NavDropdown.Item href = "/1">{this.state.info.name1}</NavDropdown.Item>
              <NavDropdown.Item href = "/2">{this.state.info.name2}</NavDropdown.Item>
              <NavDropdown.Item href = "/3">{this.state.info.name3}</NavDropdown.Item>
              <NavDropdown.Item href = "/4">{this.state.info.name4}</NavDropdown.Item>
              <NavDropdown.Item href = "/5">{this.state.info.name5}</NavDropdown.Item>
              <NavDropdown.Item href = "/6">{this.state.info.name6}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href = "/all">{this.state.info.search}</NavDropdown.Item>
            </NavDropdown>
            <form className="form-inline my-2 my-lg-0">
              <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input
                    type="radio"
                    name="options"
                    value='0'
                    defaultChecked={this.state.lang==0}
                    onChange={this.checkProcess0} /> {this.state.info.lang1}
                </label>
                <label className="btn btn-primary">
                  <input
                    type="radio"
                    name="options"
                    value='1'
                    defaultChecked={this.state.lang==1}
                    onChange={this.checkProcess1} /> {this.state.info.lang2}
              </label>
              </div>
            </form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path = "/" render={ (props) => <Home lang={this.state.lang} />}/>
          <Route exact path = "/1" render={ (props) => <Person id="1" lang={this.state.lang}/>} />
          <Route exact path = "/2" render={ (props) => <Person id="2" lang={this.state.lang}/>} />
          <Route exact path = "/3" render={ (props) => <Person id="3" lang={this.state.lang} />} />
          <Route exact path = "/4" render={ (props) => <Person id="4" lang={this.state.lang}/>} />
          <Route exact path = "/5" render={ (props) => <Person id="5" lang={this.state.lang}/>} />
          <Route exact path = "/6" render={ (props) => <Person id="6" lang={this.state.lang}/>} />
          <Route exact path = "/all" render={ (props) => <Search lang={this.state.lang} />}/>
        </Switch>
      </Router>
    </>
    )
  }
}
