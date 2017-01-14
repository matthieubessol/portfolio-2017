import React, { Component } from 'react';

class ProjectsCategories extends Component {

  componentDidMount() {

  }

  render() {
    var self = this;
    var nodes = this.props.data.map(function(project,i) {
      if(self.props.title === "Category")
        return (<div className="projects__type" data-project={i} key={i}>{project.what}</div>)
      else if(self.props.title === "Agency")
        return (<div className="projects__type" data-project={i} key={i}>{project.agency}</div>)
      else
        return (<div className="projects__type" data-project={i} key={i}>{project.year}</div>)
    });
    return (
        <div className="projects__category">
            <div className="projects__name">{this.props.title}</div>
            <div className="projects__types js-types">
              {nodes}
            </div>
        </div>
    );
  }
}

export default ProjectsCategories;
