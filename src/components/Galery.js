import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import photo1_1 from '../Photos/Orlov/orlov-1.jpg';
import photo1_2 from '../Photos/Orlov/orlov-2.jpg';
import photo1_3 from '../Photos/Orlov/orlov-3.jpg';
import photo1_4 from '../Photos/Orlov/orlov-4.jpg';
import photo1_5 from '../Photos/Orlov/orlov-5.jpg';

import photo2_1 from '../Photos/Beroy/beroy-1.jpg';
import photo2_2 from '../Photos/Beroy/beroy-2.jpg';

import photo3_1 from '../Photos/Dashuk/Dashuk-1.jpg';
import photo3_2 from '../Photos/Dashuk/Dashuk-2.jpg';
import photo3_3 from '../Photos/Dashuk/Dashuk-3.jpg';

import photo4_1 from '../Photos/Paluyan/Paluyan-1.jpg';
import photo4_2 from '../Photos/Paluyan/Paluyan-2.jpg';
import photo4_3 from '../Photos/Paluyan/Paluyan-3.jpg';

import photo5_1 from '../Photos/Ptashuk/ptashuk-1.jpg';
import photo5_2 from '../Photos/Ptashuk/ptashuk-2.jpg';
import photo5_3 from '../Photos/Ptashuk/ptashuk-3.jpg';
import photo5_4 from '../Photos/Ptashuk/ptashuk-4.jpg';
import photo5_5 from '../Photos/Ptashuk/ptashuk-5.jpg';
import photo5_6 from '../Photos/Ptashuk/ptashuk-6.jpg';
import photo5_7 from '../Photos/Ptashuk/ptashuk-7.jpg';

import photo6_1 from '../Photos/Shneyder/Shneyder-1.jpg';
import photo6_2 from '../Photos/Shneyder/sheyder-2.jpg';

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
        this.state.photos = [photo1_1, photo1_2, photo1_3, photo1_4, photo1_5];
        break;
      case "2":
        this.state.titles = persons[1].photoTitles;
        this.state.photos = [photo2_1, photo2_2];
        break;
      case "3":
        this.state.titles = persons[2].photoTitles;
        this.state.photos = [photo3_1, photo3_2, photo3_3];
        break;
      case "4":
        this.state.titles = persons[3].photoTitles;
        this.state.photos = [photo4_1, photo4_2, photo4_3];
        break;
      case "5":
        this.state.titles = persons[4].photoTitles;
        this.state.photos = [photo5_1, photo5_2, photo5_3, photo5_4, photo5_5, photo5_6, photo5_7];
        break;
      default:
        this.state.titles = persons[5].photoTitles;
        this.state.photos = [photo6_1, photo6_2];
        break;
    }
    this.state.titles= [];
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
              </Row><br/>
              </Col>
            )
        })
      }
      </Row></Container>
    )
  }
}
