import React, { Component } from "react";
import { Link } from "react-router";

const url_prefix = process.env.NODE_ENV === "production" ? "" : "";

class NextProject extends Component {
  constructor(props) {
    super(props);
    var i = 0;
    do {
      i = Math.floor(4 * Math.random());
    } while (this.props.id === i);
    this.state = {
      i: i,
      data: this.props.data[i],
    };
  }

  componentDidMount() {
    this.props.getCorrect(this.state.i);
  }

  render() {
    const backgroundStyle = {
      backgroundImage: "url(" + url_prefix + this.state.data.cover + ")",
    };
    return (
      <div className="next-project" style={backgroundStyle}>
        <Link to={`${url_prefix}/${this.state.data.nameUrl}`}>
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
