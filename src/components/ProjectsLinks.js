import React, { Component } from 'react';

class ProjectsLinks extends Component {

  componentDidMount() {

  }

  render() {
    var self = this;
    var nodes = this.props.data.map(function(project,i) {
        return (
          <div className="projects__link" data-project={i} key={i}>See project</div>
        )
    });
    return (
        <div className="projects__links">
            {nodes}
        </div>
    );
  }
}

export default ProjectsLinks;
