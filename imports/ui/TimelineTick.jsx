import React, { Component, PropTypes } from 'react';
import ReactToolTip from 'react-tooltip';

export default class TimelineTick extends Component {
  render() {
    let tick;

    if(this.props.message) {
      tick = <div className={this.props.color} data-tip data-for={this.props.dateId}>
                <ReactToolTip id={this.props.dateId} type='light' effect='solid'>
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
