import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Business } from '../api/business.js';

import TimelineWebsiteUptime from './TimelineWebsiteUptime.jsx';

class App extends Component {
  // Add method to iterate through Business collection
  // Create TimelineWebsiteUptime component w/ business name
  // Pass outage data via props to be used by TimelineTick

  render() {

    console.log(this.props.business);
    return (
      <div className="container">
        <header>
          <h1>Website Uptime Timeline</h1>
        </header>
        <TimelineWebsiteUptime />
      </div>
    );
  }
}

App.propTypes = {
  business: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    business: Business.find({}).fetch()
  };
}, App);
