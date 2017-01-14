import React, { Component } from 'react';
import MainInfos from "../components/MainInfos";
import Images from "../components/Images";
import NextProject from "../components/NextProject";
import data from '../projects.json';

class Project extends Component {
  constructor(props) {
    super(props);
    var correctData = null, id = null;
    for (var i = data.project.length - 1; i >= 0; i--) {
        if(data.project[i].nameUrl == this.props.params.nameProject){
          id = i;
          correctData = data.project[i];
        }
    }
    this.state = {
      "data":correctData,
      "id":id
    };
  }

  render() {
    return (
      <div className="product">
          <div className="product__header">
              <div className="product__back"></div>
              <div className="product__cover">
                  <img src={this.state.data.cover} className="js-cover"/>
              </div>
              <div className="overflow">
                <div className="product__title"><span>{this.state.data.name}</span></div>
              </div>
              <div className="scroll"></div>
          </div>
          <div className="product__content">
            <MainInfos/>
            <Images data={this.state.data}/>
            <NextProject data={data.project} id={this.state.id}/>
          </div>
      </div>
    );
  }
}

export default Project;
