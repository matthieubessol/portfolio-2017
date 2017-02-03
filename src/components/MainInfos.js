import React, { Component } from 'react';

class MainInfos extends Component {

  componentDidMount() {

  }

  render() {
    let textToProject = "Visit the site";
    if(this.props.data.linkType==="github")
        textToProject = "More on my Github"
    return (
        <div className="centerpad">
            <div className="main-infos">
                <div className="main-infos__left">
                    <div className="main-infos__item">
                        <div className="main-infos__type">Role</div>
                        <div className="main-infos__value">{this.props.data.role}</div>
                    </div>
                    <div className="main-infos__item">
                        <div className="main-infos__type">Date</div>
                        <div className="main-infos__value">{this.props.data.year}</div>
                    </div>
                    <div className="main-infos__item">
                        <div className="main-infos__type">What</div>
                        <div className="main-infos__value">{this.props.data.what}</div>
                    </div>
                    <div className="main-infos__item">
                        <div className="main-infos__type">Agency</div>
                        <div className="main-infos__value">{this.props.data.agency}</div>
                    </div>
                    <div className="main-infos__item">
                        <a target="_blank" href={this.props.data.urlToProject} className="main-infos__type main-infos__link">{textToProject}</a>
                    </div>
                </div>
                <div className="main-infos__right">{this.props.data.description}</div>
            </div>
        </div>
    );
  }
}

export default MainInfos;
