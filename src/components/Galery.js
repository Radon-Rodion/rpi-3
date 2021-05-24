import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import photo1_1 from '../Photos/pho1.jpg';
import photo2_1 from '../Photos/pho2.jpg';
import photo3_1 from '../Photos/pho3.jpg';
import photo4_1 from '../Photos/pho4.jpg';
import photo5_1 from '../Photos/pho5.jpg';
import photo6_1 from '../Photos/pho6.jpg';

import persons from "../Jsons/persons.json";

export default class Info extends Component {

  state = {
    photos: undefined,
    titles: undefined,
  }

  constructor(props) {
    super(props);


    switch(this.props.id){
      case "1":
        this.state.titles = persons[0].photoTitles;
        this.state.photos = [{photo1_1}];
        break;
      case "2":
        this.state.titles = persons[1].photoTitles;
        this.state.photos = [{photo2_1}];
        break;
      case "3":
        this.state.titles = persons[2].photoTitles;
        this.state.photos = [{photo3_1}];
        break;
      case "4":
        this.state.titles = persons[3].photoTitles;
        this.state.photos = [{photo4_1}];
        break;
      case "5":
        this.state.titles = persons[4].photoTitles;
        this.state.photos = [{photo5_1}];
        break;
      default:
        this.state.titles = persons[5].photoTitles;
        this.state.photos = [{photo6_1}];
        break;
    }
    console.log(this.state);
  }

  render(){
    return (
      <Container><Row>
      {
        this.state.photos.map((photo, key) =>{
            return (
              <Col md={4}>
              <Row><img
                src = {photo}
                width = "100%" height = "100%"
                alt = "Photo"
              /></Row>
              <Row>{this.state.titles[key]}
              </Row>
              </Col>
            )
        })
      }
      </Row></Container>
    )
  }
}
