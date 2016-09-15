import React, { Component } from 'react';

import TimeTick from './TimeTick.jsx';

export default class TimelineWebsiteUptime extends Component {
  // Receive TimeTick data via props
  // Iterate through TimeTick data, to generate TimeTicks

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
