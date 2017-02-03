import React, { Component } from 'react';
import Projects from '../components/Projects'
import ProjectsMobile from '../components/ProjectsMobile'
import data from '../projects.json';
import Header from '../components/Header'
import utils from '../modules/useful.js'

var time = null,
    touchStart = 0;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProject:this.props.toShowFirst,
      numberProjects:data.project.length - 1,
      data:data.project,
      touchStart:0,
      touchMove:0,
    }
  }

  handleKey(e){
    //e.preventDefault();
    if(e.keyCode === 40) this.goNext();
    else if(e.keyCode === 38) this.goPrev();
  }

  goNext() {
      if(this.state.currentProject >= this.state.numberProjects) {
        this.setState({
          currentProject:0,
        })
        return;
      }

      this.setState({
        currentProject:this.state.currentProject+1
      })
  }

  goPrev() {
      if(this.state.currentProject === 0){
        this.setState({
          currentProject:this.state.numberProjects
        })
        return;
      }

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

  handleTouchStart(e) {
    touchStart = e.changedTouches[0].clientY;
  }

  handleTouchMove(e) {
    let newY = e.changedTouches[0].clientY;
    if(time) {
      if(Date.now() - time > 2000){
        time = Date.now();
        if(newY - touchStart < 0) this.goNext();
        else this.goPrev();
      }
    } else {
        time = Date.now();
        if(newY - touchStart < 0) this.goNext();
        else this.goPrev();
    }
  }

  componentDidMount() {
    if(!utils.isMobile()){
      document.getElementsByClassName("header__left")[0].classList.remove('active');
      document.addEventListener('keydown', this.handleKey.bind(this),true);
      this.refs.siteWrapper.addEventListener('wheel', this.handleMouseWheel.bind(this),true);
      this.refs.siteWrapper.addEventListener('touchstart', this.handleTouchStart.bind(this),true);
      this.refs.siteWrapper.addEventListener('touchmove', this.handleTouchMove.bind(this),true);
    }
  }

  componentWillUnmount() {
    if(!utils.isMobile()){
      document.removeEventListener('keydown', this.handleKey.bind(this),true);
      this.refs.siteWrapper.removeEventListener('wheel', this.handleMouseWheel.bind(this),true);
      this.props.getCurrent(this.state.currentProject)
    }
  }

  render() {
    if(utils.isMobile()) {
      return (
        <div className="wrapper">
          <Header mobileFixed={false}/>
          <ProjectsMobile data={this.state.data} />
        </div>
      );
    }
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
