import React, { Component } from 'react';
import {Link} from "react-router";

class NextProject extends Component {

    constructor(props) {
      super(props);
      var i=0;
      do {
        i = Math.floor((4)*Math.random());
      }while(this.props.id===i);
      this.state = {
        data:this.props.data[i]
      };
    }

  componentDidMount() {

  }

  render() {
    const backgroundStyle = {
        backgroundImage: 'url(' + this.state.data.cover + ')',
    };
    return (
      <div className="next-project" style={backgroundStyle}>
        <Link to={"/"+this.state.data.nameUrl}>
            <div className="next-project__content">
                <div className="overflow">
                    <div className="next-project__next">Next project</div>
                </div>
                <div className="overflow">
                    <div className="next-project__title">{this.state.data.name}</div>
                </div>
            </div>
        </Link>
      </div>
    );
  }
}

export default NextProject;
