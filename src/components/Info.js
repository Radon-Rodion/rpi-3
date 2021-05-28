import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import photo1 from '../Photos/pho1.jpg';
import photo2 from '../Photos/pho2.jpg';
import photo3 from '../Photos/pho3.jpg';
import photo4 from '../Photos/pho4.jpg';
import photo5 from '../Photos/pho5.jpg';
import photo6 from '../Photos/pho6.jpg';

import persons from "../Jsons/persons.json";
import personsEng from "../Jsons/personsEng.json";

export default class Info extends Component {

  state = {
    persons: undefined,
    photo: undefined,
    name: undefined,
    years: undefined,
    bio: undefined
  }

  changeData(){
    //console.log("5686t97f");
    switch(this.props.id){
      case "1":
        this.state.name = this.state.persons[0].name;
        this.state.years = this.state.persons[0].years;
        this.state.bio = this.state.persons[0].bio;
        this.state.photo = photo1;
        break;
      case "2":
        this.state.name = this.state.persons[1].name;
        this.state.years = this.state.persons[1].years;
        this.state.bio = this.state.persons[1].bio;
        this.state.photo = photo2;
        break;
      case "3":
        this.state.name = this.state.persons[2].name;
        this.state.years = this.state.persons[2].years;
        this.state.bio = this.state.persons[2].bio;
        this.state.photo = photo3;
        break;
      case "5":
        this.state.name = this.state.persons[4].name;
        this.state.years = this.state.persons[4].years;
        this.state.bio = this.state.persons[4].bio;
        this.state.photo = photo5;
        break;
      case "6":
        this.state.name = this.state.persons[5].name;
        this.state.years = this.state.persons[5].years;
        this.state.bio = this.state.persons[5].bio;
        this.state.photo = photo6;
        break;
      default:
        this.state.name = this.state.persons[3].name;
        this.state.years = this.state.persons[3].years;
        this.state.bio = this.state.persons[3].bio;
        this.state.photo = photo4;
        break;
    }
    //console.log(this.state.persons);
  }

  componentDidUpdate() {
    if(this.props.langReverse){
      if(this.props.lang == 1){
        this.state.persons = persons;
      } else if(this.props.lang == 0){
        this.state.persons = personsEng;
      }
    } else {
      if(this.props.lang == 0){
        this.state.persons = persons;
      } else if(this.props.lang == 1){
        this.state.persons = personsEng;
      }
    }
    this.changeData();
  }

  constructor(props) {
    super(props);
    if(this.props.lang == 1){
      this.state.persons = persons;
      //console.log(this.state.persons);
    } else if(this.props.lang == 0){
      this.state.persons = personsEng;
      //console.log(this.props);
    }
    this.changeData();
  }

  render(){
    return (
      <div>
        <Container fluid>
        <Row>
          <Col md={4}><img
            src = {this.state.photo}
            width = "100%" height = "100%"
            alt = "Photo"
          /></Col>
          <Col md={8}>
            <Row><h2>{this.state.name} {this.state.years}</h2></Row>
            <Row>{this.state.bio}</Row>
            { this.props.showLink &&
              <Row><a href = {this.props.id} >View</a></Row>
            }
          </Col>
        </Row>
        </Container>
        <br/>
      </div>
    )
  }
}
