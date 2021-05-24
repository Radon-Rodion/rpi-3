import React, {Component} from 'react';
import {Container,Row, Col, Form, Button} from 'react-bootstrap';
import Info from "./Info";
import persons from "../Jsons/persons.json";
import info from "../Jsons/info.json";

export default class Search extends Component {
  state = {
    name: undefined
  }


  render(){
    return (
        <Container fluid>
          <Row>
            <Form inline>
              <Form.Group><br />
              <Form.Control type="text" placeholder={info.search}
              onChange = {(event) => {this.setState({name: event.target.value})}}
              /><br/>
              </Form.Group>
            </Form>
          </Row>
          {
            persons.map((person, key) =>{
              if(this.state.name==undefined || person.name.toLowerCase().includes(this.state.name.toLowerCase())){
                return (
                  <Info id = {String(key+1)} showLink = "true"/>
                )
              }
            })
          }
        </Container>
    )
  }
}
