import React, { Component } from 'react';
import MainInfos from "../components/MainInfos";
import Images from "../components/Images";
import NextProject from "../components/NextProject";
import Scroll from "../components/Scroll";
import data from '../projects.json';
import ReactDOM from 'react-dom';
import Header from '../components/Header'

import smoothScroll from 'smoothscroll';


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
    if(window.innerWidth>=768) {
      document.getElementsByClassName("header__left")[0].classList.remove('active');
      //this.refs.product.addEventListener('DOMMouseScroll', this.handleScroll.bind(this),false);
      window.addEventListener('scroll', this.handleScroll.bind(this),false);
    }
  }

  componentWillUnmount() {
    if(window.innerWidth>=768) {
      window.removeEventListener('scroll', this.handleScroll.bind(this),false);
      // this.refs.product.removeEventListener('DOMMouseScroll', this.handleScroll.bind(this),false);
    }
    this.props.getCurrent(this.state.correctNext)
  }

  getCorrectNext(val) {
    this.setState({
      correctNext:val
    })
  }

  handleScroll() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(document.getElementsByClassName('product__header')[0]){
      if(this.refs.header)
        this.refs.header.style.transform = "translateY("+ scrolled/4 +"px) translateZ(0)";
      if(this.refs.title)
        this.refs.title.style.transform = "translate3d(-50%,calc(-50% + -"+ scrolled/2 +"px),0)";
    }
    if(scrolled > document.getElementsByClassName('product__header')[0].offsetHeight)
      document.getElementsByClassName("header__left")[0].classList.add('active');
    else
      document.getElementsByClassName("header__left")[0].classList.remove('active');
    this.setState({
      scroll:scrolled/2
    })
  }

  handleScrollClick() {
    event.preventDefault();
    smoothScroll(this.refs.productContent, 800);
  }

  render() {
    console.log("render")

    let divStyle = {
      backgroundImage: 'url(' + this.state.data.cover + ')',
    };

    return (
      <div className="product" ref="product">
          <Header mobileFixed={false}/>
          <div className="product__header" ref="header">
              <div className="product__back"></div>
              <div className="product__cover" style={divStyle}>
              </div>
              <div className="overflow">
                <div className="product__title" ref="title"><span>{this.state.data.name}</span></div>
              </div>
              <Scroll scroll={this.state.scroll} ref="scroll" color={this.state.data.color} handleScrollClick={this.handleScrollClick.bind(this)}/>
          </div>
          <div className="product__content" ref="productContent">
            <MainInfos data={this.state.data}/>
            <Images data={this.state.data} scroll={this.state.scroll}/>
            <NextProject getCorrect={this.getCorrectNext.bind(this)} data={data.project} id={this.state.id}/>
          </div>
      </div>
    );
  }
}

export default Project;
