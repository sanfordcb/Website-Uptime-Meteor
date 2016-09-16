import React, { Component, PropTypes } from 'react';

export default class TimeTick extends Component {
  render() {
    return (
      <li>
        The color is {this.props.color}
      </li>
    );
  }
}
