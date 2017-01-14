
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'

var prevAnim = "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevPath:"",
      path:"",
    };
  }
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({
        prevPath: this.props.location,
        path:nextProps.location
      })
    }
  }

  render() {
    var nameTransition = "example", enterTimeout = 2000;
    if(this.state.prevPath.pathname != "/" && this.state.path.pathname != "/"){
      console.log("ok");
      nameTransition="nextproject";
      enterTimeout = 3000;
    } else if(this.state.path.pathname == "/"){
      console.log("project-tohome")
      nameTransition="projecttohome";
      enterTimeout = 3000;
    }

    return (
      <div>
        <Header />
        <ReactCSSTransitionGroup
              transitionName={nameTransition}
              transitionEnterTimeout={enterTimeout}
              transitionLeaveTimeout={2000}
              transitionAppear={true}
              transitionAppearTimeout={2000}
            >
            {React.cloneElement(this.props.children, {
        key: location.pathname
      })}
        </ReactCSSTransitionGroup>

    </div>
    );
  }
}

export default App;
