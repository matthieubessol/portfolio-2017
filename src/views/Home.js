import React, { Component } from 'react';
import Projects from '../components/Projects'
import data from '../projects.json';

var time = null;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProject:this.props.toShowFirst,
      numberProjects:data.project.length - 1,
      data:data.project
    }
  }

  handleKey(e){
    e.preventDefault();
    if(e.keyCode === 40) this.goNext();
    else if(e.keyCode === 38) this.goPrev();
  }

  goNext() {
      if(this.state.currentProject >= this.state.numberProjects)
        return;

      this.setState({
        currentProject:this.state.currentProject+1
      })
  }

  goPrev() {
      if(this.state.currentProject === 0)
          return;

      this.setState({
        currentProject:this.state.currentProject-1
      })
  }

  goTo(newCurrent) {
    this.setState({
      currentProject:newCurrent
    })
  }

  handleMouseWheel(e) {
    e.preventDefault();
    if(time) {
      if(Date.now() - time > 2000){
        time = Date.now();
        if(e.deltaY > 0) this.goNext();
        else this.goPrev();
      }
    } else {
        time = Date.now();
        if(e.deltaY > 0) this.goNext();
        else this.goPrev();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey.bind(this),true);
    this.refs.siteWrapper.addEventListener('mousewheel', this.handleMouseWheel.bind(this),true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey.bind(this),true);
    this.refs.siteWrapper.removeEventListener('mousewheel', this.handleMouseWheel.bind(this),true);
    this.props.getCurrent(this.state.currentProject)
  }

  render() {
    return (
      <div className="site-wrapper" ref="siteWrapper">
        <div className="translate-wrapper" ref="translateWrapper">
          <Projects current={this.state.currentProject} data={this.state.data} goTo={this.goTo.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Home;
