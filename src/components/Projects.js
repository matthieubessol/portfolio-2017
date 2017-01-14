import React, { Component } from 'react';
import {Link} from "react-router";
import ProjectsPictures from './ProjectsPictures.js';
import ProjectsTitles from './ProjectsTitles.js';
import ProjectsCategories from './ProjectsCategories.js';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nbCurrent:this.props.current
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({nbCurrent:nextProps.current});
    this.showValues(nextProps.current);
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

      document.getElementsByClassName('projects__picture')[0].classList.add('active');
      document.getElementsByClassName('js-link')[0].classList.add('active');
      setTimeout(function() {
          document.getElementsByClassName('projects__picture')[0].classList.remove('active');
          document.getElementsByClassName('js-link')[0].classList.remove('active');
      }, 1000);

      document.getElementsByClassName('js-select')[0].style.transform = "translate3d(0,"+nbCurrent*50+"px,0) scale(1.3)"
  }

  handleClick(e) {
    // var picWidth = document.getElementsByClassName('projects__overflow')[0].offsetWidth;
    // console.log(window.innerWidth / picWidth);
    //document.getElementsByClassName('projects__center')[0].style.transform = "scale("+window.innerWidth / picWidth+")";
    document.getElementsByClassName('projects__center')[0].classList.add("big");
  }

  render() {
    var link = "/mouvies";
    if(this.props.data[this.state.nbCurrent])
      link = this.props.data[this.state.nbCurrent].nameUrl;
    return (
      <div className="projects">
          <div className="projects__item js-project">

              <div className="projects__backs">
                  <div className="projects__back" data-project="0"></div>
                  <div className="projects__back" data-project="1"></div>
                  <div className="projects__back" data-project="2"></div>
                  <div className="projects__back" data-project="3"></div>
                  <div className="projects__back" data-project="4"></div>
              </div>
              <div className="projects__wrapper">
                  <div className="projects__center">
                      <ProjectsPictures data={this.props.data}/>
                  </div>
                  <ProjectsTitles data={this.props.data}/>
                  <div className="projects__content">
                      <div className="projects__list">
                          <ProjectsCategories data={this.props.data} title="Category"/>
                          <ProjectsCategories data={this.props.data} title="Agency"/>
                          <ProjectsCategories data={this.props.data} title="Year"/>
                          <div className="projects__category">
                              <Link to={link} data-project="0" className="js-link projects__button" onClick={this.handleClick.bind(this)}>
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
                <a href="#" className="menu-item js-dot" data-item="0"> <i className="fa fa-bar-chart"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="1"> <i className="fa fa-plus"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="2"> <i className="fa fa-heart"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="3"> <i className="fa fa-envelope"></i> </a>
                <a href="#" className="menu-item js-dot" data-item="4"> <i className="fa fa-envelope"></i> </a>
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
