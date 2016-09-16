import React, { Component, PropTypes } from 'react';

export default class TimelineTick extends Component {
  render() {
    return (
      <li>
        The color is {this.props.color}
        The message is {this.props.message}
      </li>
    );
  }
}
