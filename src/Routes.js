import React, { Component } from "react";
import App from "./App";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import "./index.css";

import Project from "./views/Project";
import Home from "./views/Home";

const url_prefix = ""; // Remove the url_prefix since we're using hashHistory

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHome: 0,
    };
  }

  currentProjectHome(val) {
    // this.setState({
    //   currentHome:val
    // })
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route
          path="/"
          component={App}
          currentProjectHome={this.currentProjectHome.bind(this)}
          ignoreScrollBehavior
        >
          <IndexRoute component={Home} />
          <Route path="/:nameProject" component={Project} />
          <Route path="*" component={Home} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
