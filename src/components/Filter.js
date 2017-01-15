import React, { Component } from 'react';

class Filter extends Component {

  render() {
    var classes = "filter";
    if(this.props.active)
      classes+=" off"

    return(<div className={classes}></div>);
  }
}

export default Filter;
