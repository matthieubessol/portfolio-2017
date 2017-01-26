import React, { Component } from 'react';
import utils from '../modules/useful.js';

class Images extends Component {

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    let scroll = nextProps.scroll;
    for (var i = document.getElementsByClassName("js-toScale").length - 1; i >= 0; i--) {
      let offsetPic = utils.getOffset(document.getElementsByClassName("image--full")[i]).top,
          bottomScroll = scroll + window.innerHeight + document.getElementsByClassName("image--full")[i].offsetHeight*0.33,
          valToScale =2-(bottomScroll/offsetPic);
      if(valToScale>=1)
        document.getElementsByClassName("js-toScale")[i].style.transform = "scale("+ valToScale +")";
      else
        document.getElementsByClassName("js-toScale")[i].style.transform = "scale("+ 1 +")";
    }
  }

  render() {
    var nodes = this.props.data.images.map(function(image,i) {
        if(image.type === 2) {
          return (
            <div className="centerpad" key={i}>
              <div className="row image image--half js-fade">
                <div className="small-12 medium-6 large-6 columns"><img src={image.url1} role="presentation"/></div>
                <div className="small-12 medium-6 large-6 columns"><img src={image.url2} role="presentation"/></div>
              </div>
            </div>
          );
        } else if(image.type==="full"){
          return(
            <div className="row image image--full js-fade" key={i}>
              <div className="small-12 medium-12 large-12">
                <img src={image.url} role="presentation" className="js-toScale" ref="toScroll"/>
              </div>
            </div>
          );
        }
        else if(image.type===3){
          return(
            <div className="centerpad" key={i}>
              <div className="row image image--third js-fade">
                <div className="small-12 medium-4 large-4 columns"><img src={image.url1} role="presentation"/></div>
                <div className="small-12 medium-4 large-4 columns"><img src={image.url2} role="presentation"/></div>
                <div className="small-12 medium-4 large-4 columns"><img src={image.url3} role="presentation"/></div>
              </div>
            </div>
          );
        } else {
          return(
            <div className="centerpad" key={i}>
              <div className="row image js-fade">
                <div className="small-12 medium-12 large-12 columns">
                  <img src={image.url} role="presentation"/>
                </div>
              </div>
            </div>
          );
        }
    });

    return (
      <div className="images">
        {nodes}
      </div>
    );
  }
}

export default Images;
