import React, {Component} from 'react';
import {Card, Accordion, Button, Collapse} from 'react-bootstrap';

export default class Abzats extends Component {

  render(){
    return (
      <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {this.props.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {this.props.inside}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      </Accordion>
    )
  }
}
