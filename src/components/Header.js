import React, { Component } from 'react';
import {Link} from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nbCurrent:this.props.current
    };
  }

  render() {
    return (
      <div className="header">
        <div className="header__left">
          <Link to="/">matthieu bessol</Link>
        </div>
        <div className="header__right">
          <Link to="/">projects</Link>
        </div>
      </div>
    );
  }
}

export default Header;
