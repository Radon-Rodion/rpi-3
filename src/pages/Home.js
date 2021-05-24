import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Info from "../components/Info";
import Abzats from "../components/Abzats";
import logo from '../components/logo.jpg';
import info from "../Jsons/info.json";
import authors from "../Jsons/authors.json";
import rafeev from "../Photos/Authors/rafeev.jpg";
import kolodko from "../Photos/Authors/kolodko.jpg";
import zelezinsky from "../Photos/Authors/zelezinsky.jpg";

export default class Header extends Component {
  render(){
    return (
      <div><br/>
      <Container fluid>
        <Row>
          <h2>{info.title}</h2>
          <Col md={3}>
            <img src = {logo} width = "100%" alt = "Logo"/>
          </Col>
          <Col md={9}>
            {info.text}
          </Col>
        </Row>
      </Container>
      <br/>
      <Abzats title = {info.personality} inside =
        <Info id = "4" showLink = "true"/>
      />
      <br/>
      <Container fluid>
        <Row>
          <h2>{info.authors}</h2>
          <Col md={4}>
            <Row><img src = {rafeev} width = "100%" alt = "Rafeev"/></Row>
            <Row><h3>{authors.rafeev}</h3></Row>
            <Row><a href = {authors.rafeevGit}>{authors.rafeevGit}</a></Row><br/>
          </Col>
          <Col md={4}>
            <Row><img src = {kolodko} width = "100%" alt = "Kolodko"/></Row>
            <Row><h3>{authors.kolodko}</h3></Row>
            <Row><a href = {authors.kolodkoGit}>{authors.kolodkoGit}</a></Row><br/>
          </Col>
          <Col md={4}>
            <Row><img src = {zelezinsky} width = "100%" alt = "Zelezinsky"/></Row>
            <Row><h3>{authors.zelezinsky}</h3></Row>
            <Row><a href = {authors.zelezinskyGit}>{authors.zelezinskyGit}</a></Row><br/>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
