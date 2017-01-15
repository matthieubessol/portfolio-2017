import React, { Component } from 'react';
import {Link} from "react-router";

class About extends Component {

  render() {
    var classes = "about";
    if(this.props.isOpen)
      classes += " open"

    console.log(classes)
    return (
      <div className={classes}>
        <div className="about__left"></div>
        <div className="about__right">
          <div className="about__content">
            <p><span>Hi, I’m Matthieu, a french front-end developper base in Paris, France.</span></p>
            <p>I’m studying at <span>IMAC</span>, an engeneering school near Paris. I learn several things from web to OpenGL and sound design. </p>
            <p>I believe <span>motion</span> can create logic in navigation and that <span>performance</span> is a feature, not a bonus.</p>
            <p>I’m always please to work in freelance and I’m actually looking for an <span>internship</span> as a front-end developper.✌️</p>
            <p>You can <span>follow</span> me here</p>
            <p>or contact me with my mail <a href="mailto:matthieubessol@gmail.com"><span>matthieubessol@gmail.com</span></a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
