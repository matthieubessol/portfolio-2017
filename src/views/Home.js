import React, { Component } from 'react';
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import data from '../projects.json';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProject:"intro",
      numberProjects:4,
      data:data.project
    }
  }

  handleKey(e){
    e.preventDefault();
    if(this.isProduct() === true) return;
    if(e.keyCode === 40) this.goNext();
    else if(e.keyCode === 38) this.goPrev();
  }

  isProduct() {
    if(document.body.classList.contains("inProduct")) return true;
    else return false;
  }

  goNext() {
      if(this.isProduct() === true) return;
      if(this.state.currentProject === "intro") {
          this.refs.translateWrapper.classList.add('project');
          this.setState({currentProject:0});
          return;
      }
      if(this.state.currentProject >= this.state.numberProjects) return;

      this.setState({currentProject:this.state.currentProject+1})
  }

  goPrev() {
      if(this.isProduct() === true) return;
      if(this.state.currentProject === "intro") return;
      if(this.state.currentProject === 0) {
          this.setState({currentProject:"intro"});
          this.refs.translateWrapper.classList.remove("project");
          return;
      }

      this.setState({currentProject:this.state.currentProject-1})
      // this.showValues();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey.bind(this),false);
  }

  render() {
    return (
      <div className="site-wrapper" ref="siteWrapper">
        <div className="translate-wrapper" ref="translateWrapper">
          <Intro/>
          <Projects current={this.state.currentProject} data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default Home;
