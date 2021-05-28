import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Info from "../components/Info";
import Abzats from "../components/Abzats";
import logo from '../components/logo.jpg';
import info from "../Jsons/info.json";
import authors from "../Jsons/authors.json";
import infoRus from "../Jsons/infoRus.json";
import authorsRus from "../Jsons/authorsRus.json";

import rafeev from "../Photos/Authors/rafeev.jpg";
import kolodko from "../Photos/Authors/kolodko.jpg";
import zelezinsky from "../Photos/Authors/zelezinsky.jpg";

export default class Header extends Component {
  state = {
    authors: undefined,
    info: undefined,
    lang: undefined
  }
  componentDidUpdate() {
    if(this.props.lang == 0){
      this.state.info = infoRus;
      this.state.authors = authorsRus;
      //this.setState({info: infoRus, authors: authorsRus});
    } else if(this.props.lang == 1){
      this.state.info = info;
      this.state.authors = authors;
      //this.setState({info: info, authors: authors});
    }
    this.state.lang = this.props.lang;
    //console.log(this.state.lang);
  }

  constructor(props) {
    super(props);

    if(this.props.lang == 1){
      this.state.info = infoRus;
      this.state.authors = authorsRus;

    } else if(this.props.lang == 0){

      this.state.info = info;
      this.state.authors = authors;
    }
    this.state.lang = this.props.lang;
  }
  render(){
    //console.log(this.state.lang);
    return (
      <div><br/>
      <Container fluid>
        <Row>
          <h2>{this.state.info.title}</h2>
          <Col md={3}>
            <img src = {logo} width = "100%" alt = "Logo"/>
          </Col>
          <Col md={9}>
            {this.state.info.text}
          </Col>
        </Row>
      </Container>
      <br/>
      <Abzats title = {this.state.info.personality} inside =
        <Info id="4" showLink="true" langReverse="true" lang={this.state.lang}/>
      />
      <br/>
      <Container fluid>
        <Row>
          <h2>{this.state.info.authors}</h2>
          <Col md={4}>
            <Row><img src = {rafeev} width = "100%" alt = "Rafeev"/></Row>
            <Row><h3>{this.state.authors.rafeev}</h3></Row>
            <Row><a href = {this.state.authors.rafeevGit}>{this.state.authors.rafeevGit}</a></Row><br/>
          </Col>
          <Col md={4}>
            <Row><img src = {kolodko} width = "100%" alt = "Kolodko"/></Row>
            <Row><h3>{this.state.authors.kolodko}</h3></Row>
            <Row><a href = {this.state.authors.kolodkoGit}>{this.state.authors.kolodkoGit}</a></Row><br/>
          </Col>
          <Col md={4}>
            <Row><img src = {zelezinsky} width = "100%" alt = "Zelezinsky"/></Row>
            <Row><h3>{this.state.authors.zelezinsky}</h3></Row>
            <Row><a href = {this.state.authors.zelezinskyGit}>{this.state.authors.zelezinskyGit}</a></Row><br/>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
