import React, { Component } from 'react';

class ProjectsPictures extends Component {

  componentDidMount() {

  }

  render() {
    var nodes = this.props.data.map(function(pic,i) {
        return (
            <div className="projects__picwrap" data-project={i} key={i}>
                <div className="projects__overflow">
                    <img src={pic.cover}/>
                </div>
            </div>
        )
    });
    return (
        <div className="projects__picture">
            {nodes}
        </div>
    );
  }
}

export default ProjectsPictures;
