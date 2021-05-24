import React, {Component} from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default class Biography extends Component {

  render(){
    console.log("Here");
    console.log(this.props.biography.date1);
    return (
      <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText={this.props.biography.date1}
    style={{ color: '#e86971' }}
  >
    <h3>{this.props.biography.title1}</h3>
    <p>
      {this.props.biography.bio1}
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText={this.props.biography.date2}
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>{this.props.biography.title2}</h3>
    <p>
      {this.props.biography.bio2}
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText={this.props.biography.date3}
    dateInnerStyle={{ background: '#a0a0a0' }}
  >
    <h3>{this.props.biography.title3}</h3>
    <p>
      {this.props.biography.bio3}
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText={this.props.biography.date4}
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>{this.props.biography.title4}</h3>
    <p>
      {this.props.biography.bio4}
    </p>
  </TimelineItem>
</Timeline>
    )
  }
}
