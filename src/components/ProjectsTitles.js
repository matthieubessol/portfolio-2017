import React, { Component } from 'react';
import {Link} from "react-router";

class ProjectsTitles extends Component {

  componentDidMount() {

  }

  render() {
    var self = this;
    var nodes = this.props.data.map(function(project,i) {
        return (
            <div className="projects__title" data-project={i} key={i}><Link to={self.props.link}>{project.name}</Link></div>
        )
    });
    return (
        <div className="projects__titles">
            {nodes}
        </div>
    );
  }
}

export default ProjectsTitles;
