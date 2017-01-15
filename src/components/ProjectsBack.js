import React, { Component } from 'react';

class ProjectsBack extends Component {

  render() {
    var self = this;
    var nodes = this.props.data.map(function(pic,i) {
      var classes = "projects__back";
      if(i===self.props.current)
        classes += " active";
      return (
          <div className={classes} data-project={i} key={i}></div>
      )
    });
    return (
        <div className="projects__backs">
            {nodes}
        </div>
    );
  }
}

export default ProjectsBack;
