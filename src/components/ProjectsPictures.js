import React, { Component } from "react";

const url_prefix = process.env.NODE_ENV === "production" ? "" : "";

class ProjectsPictures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nbLoad: 0,
    };
  }

  componentDidMount() {}

  handleLoad() {
    if (this.state.nbLoad + 1 === this.props.data.length)
      this.props.finishLoad();

    this.setState({
      nbLoad: this.state.nbLoad + 1,
    });
  }

  render() {
    var self = this;
    var nodes = this.props.data.map(function (pic, i) {
      var classes = "projects__picwrap";
      if (i === self.props.current) classes += " active";
      return (
        <div className={classes} data-project={i} key={i}>
          <div className="projects__overflow">
            <img
              src={url_prefix + pic.cover}
              onLoad={self.handleLoad.bind(self)}
              role="presentation"
            />
          </div>
        </div>
      );
    });
    return <div className="projects__picture">{nodes}</div>;
  }
}

export default ProjectsPictures;
