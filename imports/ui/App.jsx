import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Business } from '../api/business.js';

import TimelineWebsiteUptime from './TimelineWebsiteUptime.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timelineCurrent: false
    };
  }

  componentDidMount() {
    Meteor.call('retrieveDowntimes');
    this.setState({
      timelineCurrent: true
    });
  }

  buildTimelines() {
    return this.props.business.map((biz) => {
      return (
        <TimelineWebsiteUptime
          key={biz._id}
          downtimes={biz.downtimes}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Website Uptime Timeline</h1>
        </header>
          <ul>
            {this.buildTimelines()}
          </ul>
      </div>
      
    );
  }
  
}

App.propTypes = {
  business: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('business');

  return {
    business: Business.find({}).fetch()
  };
}, App);
