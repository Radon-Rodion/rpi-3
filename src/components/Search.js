import React, {Component} from 'react';
import {Container,Row, Col, Form, Button} from 'react-bootstrap';
import Info from "./Info";
import persons from "../Jsons/persons.json";
import personsEng from "../Jsons/personsEng.json";
import info from "../Jsons/info.json";
import infoRus from "../Jsons/infoRus.json";

export default class Search extends Component {
  state = {
    name: undefined,
    info: undefined,
    persons: undefined
  }

  componentDidUpdate() {
    if(this.props.lang == 1){
      this.state.info = infoRus;
      this.state.persons = persons;
    } else if(this.props.lang == 0){
      this.state.info = info;
      this.state.persons = personsEng;
    }
    console.log(this.state.info.search);
  }

  constructor(props) {
    super(props);
    if(this.props.lang == 1){
      this.state.info = infoRus;
      this.state.persons = persons;
    } else if(this.props.lang == 0){
      this.state.info = info;
      this.state.persons = personsEng;
    }
    console.log(this.props.lang);
  }

  render(){
    return (
        <Container fluid>
          <Row>
            <Form inline>
              <Form.Group><br />
              <Form.Control type="text" placeholder={this.state.info.search}
              onChange = {(event) => {this.setState({name: event.target.value})}}
              /><br/>
              </Form.Group>
            </Form>
          </Row>
          {
            this.state.persons.map((person, key) =>{
              if(this.state.name==undefined || person.name.toLowerCase().includes(this.state.name.toLowerCase())){
                return (
                  <Info id = {String(key+1)} showLink = "true" lang = {this.props.lang}/>
                )
              }
            })
          }
        </Container>
    )
  }
}
