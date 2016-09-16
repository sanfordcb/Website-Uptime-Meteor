import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Business } from '../api/business.js';

import TimelineWebsiteUptime from './TimelineWebsiteUptime.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Commented out call to 'retrieveDowntimes' method
    // due to limited data from call to Updown
    // using call to 'getTestData' to populate with test data
    
    // Meteor.call('retrieveDowntimes');
    Meteor.call('getTestData');
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
