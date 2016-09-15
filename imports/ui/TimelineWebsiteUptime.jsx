import React, { Component } from 'react';

import TimeTick from './TimeTick.jsx';

export default class TimelineWebsiteUptime extends Component {
  // Receive TimeTick data via props
  // Iterate through TimeTick data, to generate TimeTicks
  generateTimeTicks() {
    // iterate through downtimes to get errors
    // use dateTracker obj to avoid repeating errors for days
    
    const dateTracker = {};
    this.props.downtimes.map((check) => {
      let checkDay = check.started_at.slice(0, 9);
    });
  }

  render() {
    return (
      <li>
        <div>
          This is a placeholder... {this.props.downtimes.length}
          <TimeTick />
        </div>
      </li>
    );
  }
}
