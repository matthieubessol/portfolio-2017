
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevPath:"",
      path:"",
      currentHome:0,
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

  handleCurrent(val) {
    console.log(val)
    this.setState({currentHome:val});
  }

  render() {
    var nameTransition = "example", enterTimeout = 1;
    if(this.state.prevPath.pathname !== "/" && this.state.path.pathname !== "/"){
      nameTransition="nextproject";
      enterTimeout = 1;
    } else if(this.state.path.pathname === "/"){
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
              key: location.pathname,
              prevId:0,
              getCurrent:this.handleCurrent.bind(this),
              toShowFirst:this.state.currentHome
            })}
        </ReactCSSTransitionGroup>

    </div>
    );
  }
}

export default App;
