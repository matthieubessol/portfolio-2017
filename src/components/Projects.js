import React, { Component } from 'react';
import {Link} from "react-router";
import ProjectsPictures from './ProjectsPictures.js';
import ProjectsTitles from './ProjectsTitles.js';
import ProjectsCategories from './ProjectsCategories.js';
import ProjectsBack from './ProjectsBack.js';
import Filter from './Filter.js';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nbCurrent:this.props.current,
      isLoad:false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({nbCurrent:nextProps.current});
    this.showValues(nextProps.current);
  }

  componentDidMount() {
    this.showValues(this.state.nbCurrent);
  }

  showValues(nbCurrent) {
      document.getElementsByClassName('js-link')[0].dataset.project = nbCurrent;
      // Show by types.
      for (var i = document.querySelectorAll("[data-project]").length - 1; i >= 0; i--) {
          if(document.querySelectorAll("[data-project]")[i].dataset.project == nbCurrent)
              document.querySelectorAll("[data-project]")[i].classList.add('active');
          else
              document.querySelectorAll("[data-project]")[i].classList.remove('active');
      }

      //document.getElementsByClassName('projects__picture')[0].classList.add('active');
      document.getElementsByClassName('js-link')[0].classList.add('active');
      setTimeout(function() {
          //document.getElementsByClassName('projects__picture')[0].classList.remove('active');
          document.getElementsByClassName('js-link')[0].classList.remove('active');
      }, 1000);

      document.getElementsByClassName('js-select')[0].style.transform = "translate3d(0,"+nbCurrent*50+"px,0) scale(1.3)"
  }

  handleLoad() {
    this.setState({
      isLoad:true
    })
  }

  handleDotClick(e) {
    e.preventDefault();
    this.props.goTo(e.target.dataset.item)
  }

  render() {
    var link = "/mouvies";
    if(this.props.data[this.state.nbCurrent])
      link = this.props.data[this.state.nbCurrent].nameUrl;

    var projectsClasses = "projects off";
    if(this.state.isLoad)
      projectsClasses = "projects";
    return (
      <div className={projectsClasses}>
          <Filter active={this.state.isLoad}/>
          <div className="projects__item js-project">
              <ProjectsBack data={this.props.data} current={this.state.nbCurrent} />
              <div className="projects__wrapper">
                  <div className="projects__center">
                    <Link to={link}>
                      <ProjectsPictures finishLoad={this.handleLoad.bind(this)} data={this.props.data} current={this.state.nbCurrent}/>
                    </Link>
                  </div>
                  <ProjectsTitles link={link} data={this.props.data}/>
                  <div className="projects__content">
                      <div className="projects__list">
                          <ProjectsCategories data={this.props.data} current={this.state.nbCurrent} title="Category"/>
                          <ProjectsCategories data={this.props.data} current={this.state.nbCurrent} title="Agency"/>
                          <ProjectsCategories data={this.props.data} current={this.state.nbCurrent} title="Year"/>
                          <div className="projects__category">
                              <Link to={link} data-project="0" className="js-link projects__button">
                                  <div className="projects__links">
                                      <div className="projects__link" data-project="0">See project</div>
                                      <div className="projects__link" data-project="1">See project</div>
                                      <div className="projects__link" data-project="2">See project</div>
                                      <div className="projects__link" data-project="3">See project</div>
                                      <div className="projects__link" data-project="4">See project</div>
                                  </div>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className="pagination">
              <nav className="menu">
                <div className="menu-item js-select"></div>
                <a href="#" className="menu-item js-dot" data-item="0" onClick={this.handleDotClick.bind(this)}> <i className="fa fa-bar-chart"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="1" onClick={this.handleDotClick.bind(this)}> <i className="fa fa-plus"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="2" onClick={this.handleDotClick.bind(this)}> <i className="fa fa-heart"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="3" onClick={this.handleDotClick.bind(this)}> <i className="fa fa-envelope"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="4" onClick={this.handleDotClick.bind(this)}> <i className="fa fa-envelope"></i> </a>
              </nav>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="shadowed-goo">

                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feComposite in2="shadow" in="goo" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                  </defs>
              </svg>
          </div>
      </div>
    );
  }
}

export default Projects;
