import React, { Component } from 'react';
import {Link} from "react-router";

class ProjectsMobile extends Component {
  render() {
    let nodesProject = this.props.data.map((project,i) => {
      let divStyle = {
        backgroundImage: 'url(' + project.cover + ')'
      };
      return(
        <Link to={"/"+ project.nameUrl} key={i} className="preview">
          <div style={divStyle} className="preview__background">
            <div className="preview__title">{project.name}</div>
          </div>
        </Link>
      )
    })
    return (
      <div className="previews">
        {nodesProject}
      </div>
    );
  }
}

export default ProjectsMobile;
