import React, { Component } from 'react';

import TimelineWebsiteUptime from './TimelineWebsiteUptime.jsx';

export default class App extends Component {
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
      </div>
    );
  }
}
