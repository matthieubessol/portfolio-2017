import React, { Component } from "react";
import { Link } from "react-router";

const url_prefix =
  process.env.NODE_ENV === "production" ? "/portfolio-2017" : "";

class ProjectsMobile extends Component {
  render() {
    let nodesProject = this.props.data.map((project, i) => {
      let divStyle = {
        backgroundImage: "url(" + url_prefix + project.cover + ")",
      };
      return (
        <Link
          to={`${url_prefix}/${project.nameUrl}`}
          key={i}
          className="preview"
        >
          <div style={divStyle} className="preview__background">
            <div className="preview__title">{project.name}</div>
          </div>
        </Link>
      );
    });
    return <div className="previews">{nodesProject}</div>;
  }
}

export default ProjectsMobile;
