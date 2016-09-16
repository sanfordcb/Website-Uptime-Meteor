import React, { Component, PropTypes } from 'react';
import ReactToolTip from 'react-tooltip';

export default class TimelineTick extends Component {
  render() {
    let tick;

    if(this.props.message) {
      tick = <div className={this.props.color} data-tip data-for={this.props.key}>
                <ReactToolTip id={this.props.key} type='light' effect='solid' border='true'>
                  <span><b>{this.props.message}</b></span>
                </ReactToolTip>
              </div>
    } else {
      tick = <div className={this.props.color}></div>
    }

    return (
      tick
    );
  }
}
