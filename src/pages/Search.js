import React, {Component} from 'react';
import {Card, Accordion, Button, Collapse} from 'react-bootstrap';
import Search from "../components/Search";

export default class SearchPage extends Component {
  render(){
    return (
      <div>
      <Search lang={this.props.lang}/>

      </div>
    )
  }
}
