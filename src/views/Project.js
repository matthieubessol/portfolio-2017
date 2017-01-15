import React, { Component } from 'react';
import MainInfos from "../components/MainInfos";
import Images from "../components/Images";
import NextProject from "../components/NextProject";
import Scroll from "../components/Scroll";
import data from '../projects.json';

class Project extends Component {
  constructor(props) {
    super(props);
    var correctData = null, id = null;
    for (var i = data.project.length - 1; i >= 0; i--) {
        if(data.project[i].nameUrl === this.props.params.nameProject){
          id = i;
          correctData = data.project[i];
        }
    }
    this.state = {
      "data":correctData,
      "id":id,
      "scroll":0,
      "correctNext":0,
    };
  }

  componentDidMount() {
    this.refs.product.addEventListener('mousewheel', this.handleScroll.bind(this),false);
  }

  componentWillUnmount() {
    this.refs.product.removeEventListener('mousewheel', this.handleScroll.bind(this),false);
    this.props.getCurrent(this.state.correctNext)
  }

  getCorrectNext(val) {
    this.setState({
      correctNext:val
    })
  }

  handleScroll() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    this.refs.header.style.transform = "translateY("+ scrolled/4 +"px) translateZ(0)";
    this.refs.title.style.transform = "translate(-50%,calc(-50% + -"+ scrolled/2 +"px))";
    this.setState({
      scroll:scrolled/2
    })
  }

  render() {
    return (
      <div className="product" ref="product">
          <div className="product__header" ref="header">
              <div className="product__back"></div>
              <div className="product__cover">
                  <img src={this.state.data.cover} className="js-cover" role="presentation"/>
              </div>
              <div className="overflow">
                <div className="product__title" ref="title"><span>{this.state.data.name}</span></div>
              </div>
              <Scroll scroll={this.state.scroll} ref="scroll" color={this.state.data.color}/>
          </div>
          <div className="product__content">
            <MainInfos/>
            <Images data={this.state.data}/>
            <NextProject getCorrect={this.getCorrectNext.bind(this)} data={data.project} id={this.state.id}/>
          </div>
      </div>
    );
  }
}

export default Project;
