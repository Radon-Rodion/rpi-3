import React, {Component} from 'react';
import {Card, Accordion, Button, Collapse} from 'react-bootstrap';

import Biography from "../components/Biography";
import Map from "../components/Map";
import Info from "../components/Info";
import Abzats from "../components/Abzats";
import Galery from "../components/Galery";

import info from "../Jsons/info.json";
import persons from "../Jsons/persons.json";
import infoRus from "../Jsons/infoRus.json";
import personsEng from "../Jsons/personsEng.json";

export default class Header extends Component {
  state = {
    data: undefined,
    persons: undefined,
    info: undefined
  }

  changeData(){
    switch(this.props.id){
      case "1":
        this.state.data = this.state.persons[0];
        break;
      case "2":
      this.state.data = this.state.persons[1];
        break;
      case "3":
      this.state.data = this.state.persons[2];
        break;
      case "5":
      this.state.data = this.state.persons[4];
        break;
      case "6":
        this.state.data = this.state.persons[5];
        break;
      default:
      this.state.data = this.state.persons[3];
        break;
    }
  }

  componentWillReceiveProps(props) {
    if(this.props.lang == 0){
      this.state.info = infoRus;
      this.state.persons = persons;
    } else if(this.props.lang == 1){
      this.state.info = info;
      this.state.persons = personsEng;
    }
    this.changeData();
    //console.log(this.state.data);
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

    this.changeData();
   console.log(this.state.data);
  }

  render(){
    return (
      <div>
        <Info id = {this.props.id} lang={this.props.lang}/>
        <Abzats title = {this.state.info.biography} inside =
          <Biography biography = {this.state.data.fullBio}/>
        />
        <Abzats title = {this.state.info.galery} inside =
          <Galery id = {this.props.id}/>
        />
        <Abzats title = {this.state.info.map} inside =
          <Map center = {this.state.data.place}/>
        />

        <Abzats title = {this.state.info.video} inside =
          <iframe src= {this.state.data.video}
          style = {{position: 'absolute', width: '100%', height: '400px'}}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
           title="YouTube video player"/>
        />
      </div>
    )
  }
}
