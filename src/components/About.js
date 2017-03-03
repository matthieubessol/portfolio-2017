import React, { Component } from 'react';

class About extends Component {

  render() {
    var classes = "about";
    if(this.props.isOpen)
      classes += " open"
    return (
      <div className={classes}>
        <div className="about__left"></div>
        <div className="about__right">
          <div className="about__content">
            <p><span>Hi, I’m Matthieu, a french front-end developper base in Paris, France.</span></p>
            <p>I’m studying at <span><a target="_blank" href="http://www.ingenieur-imac.fr/" className="about__link">IMAC</a></span>, an engeneering school near Paris. I learn several things from web to OpenGL and sound design. </p>
            <p>I believe <span>motion</span> leads to logic and that <span>performance</span> enhances interactivity.</p>
            <p>I’m always please to work in freelance and I’m actually looking for an <span>internship</span> as a front-end developper.✌️</p>
            <p className="small-bottom">You can <span>follow</span> me here</p>
            <div className="logos">
              <a target="_blank" href="https://github.com/matthieubessol"><div className="logos__item logos__item--github"></div></a>
              <a target="_blank" href="http://codepen.io/Pandame/"><div className="logos__item logos__item--codepen"></div></a>
              <a target="_blank" href="https://twitter.com/mattsolbe"><div className="logos__item logos__item--twitter"></div></a>
            </div>
            <p className="small-top">or contact me with my mail <a className="about__link" href="mailto:matthieubessol@gmail.com"><span>matthieubessol@gmail.com</span></a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
