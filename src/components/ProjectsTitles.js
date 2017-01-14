import React, { Component } from 'react';

class ProjectsTitles extends Component {

  componentDidMount() {

  }

  render() {
    var nodes = this.props.data.map(function(project,i) {
        return (
            <div className="projects__title" data-project={i} key={i}>{project.name}</div>
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
