import React, {Component} from 'react';
import {Card, Accordion, Button, Collapse} from 'react-bootstrap';

import Biography from "../components/Biography";
import Map from "../components/Map";
import Info from "../components/Info";
import Abzats from "../components/Abzats";
import Galery from "../components/Galery";

import info from "../Jsons/info.json";
import persons from "../Jsons/persons.json";

export default class Header extends Component {
  state = {
    data: undefined
  }

  constructor(props) {
    super(props);


    switch(this.props.id){
      case "1":
        this.state.data = persons[0];
        break;
      case "2":
      this.state.data = persons[1];
        break;
      case "3":
      this.state.data = persons[2];
        break;
      default:
      this.state.data = persons[3];
        break;
    }
    console.log(this.state.data);
  }

  render(){
    return (
      <div>
        <Info id = {this.props.id}/>
        <Abzats title = {info.biography} inside =
          <Biography biography = {this.state.data.fullBio}/>
        />
        <Abzats title = {info.galery} inside =
          <Galery id = {this.props.id}/>
        />
        <Abzats title = {info.map} inside =
          <Map center = {this.state.data.place}/>
        />
        <Abzats title = {info.video} inside =
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
          style = {{position: 'absolute', width: '100%', height: '400px'}}
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'/>
        />
      </div>
    )
  }
}
