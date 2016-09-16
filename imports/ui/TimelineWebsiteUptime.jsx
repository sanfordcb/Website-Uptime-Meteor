import React, { Component, PropTypes } from 'react';

import TimeTick from './TimeTick.jsx';

import dateGenerator from '../utils/date-generator.js';

export default class TimelineWebsiteUptime extends Component {
  generateTimeTicks() {
    const timeline = [];
    for(let i = 30; i >= 0; i--) {
      let checkDay = dateGenerator(i).slice(0, 10);
      timeline.push(checkDay);
    }

    const downtimeTracker = {};
    
    if(!this.props.downtimes) {
      return timeline.map((date) => {
        let color = "_empty";

        let today = new Date().toISOString();
        today = today.slice(0, 10);

        if(date === today) {
          color = "_current_day";
        }

        return (
          <TimeTick
            key={date}
            color={color}
          />
        );
      });
    }

    this.props.downtimes.forEach((check) => {
      let checkStart = check.started_at.slice(0, 10);
        if(check.duration >= 900) {
          downtimeTracker[checkStart] = "_orange";
        } else if(check.duration >= 5400){
          downtimeTracker[checkStart] = "_red";
        } else {
          downtimeTracker[checkStart] = "_green";
        }
    });
      
    return timeline.map((date) => {
      let color;

      let today = new Date().toISOString();
      today = today.slice(0, 10);

      if(downtimeTracker[date]) {
        color = downtimeTracker[date];
      } else {
        color = "_green";
      }

      if(date === today) {
        color = "_current_day";
      }

      return (
        <TimeTick
          key={date}
          color={color}
        />
      );
    });
  }

  render() {
    return (
      <li>
        <div>
          This is a placeholder...
          <ul>
            {this.generateTimeTicks()}
          </ul>
        </div>
      </li>
    );
  }
}

// TimelineWebsiteUptime.propTypes = {
//   downtimes: PropTypes.array.isRequired
// };
