import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Business } from '../api/business.js';

import TimelineWebsiteUptime from './TimelineWebsiteUptime.jsx';

class App extends Component {
  componentDidMount() {
    Meteor.call('retrieveDowntimes');
  }
  buildTimelines() {
    console.log(this.props.business);
  }
  // Add method to iterate through Business collection
  // Create TimelineWebsiteUptime component w/ business name
  // Pass outage data via props to be used by TimelineTick

  render() {
    return (
      <div className="container">
        <header>
          <h1>Website Uptime Timeline</h1>
        </header>
        <TimelineWebsiteUptime />
        {this.buildTimelines()}
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
