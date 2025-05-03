import React, { Component } from "react";
import App from "./App";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "./index.css";

import Project from "./views/Project";
import Home from "./views/Home";

const url_prefix =
  process.env.NODE_ENV === "production" ? "/portfolio-2017" : "";

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
      <Router history={browserHistory}>
        <Route
          path={url_prefix}
          component={App}
          currentProjectHome={this.currentProjectHome.bind(this)}
          ignoreScrollBehavior
        >
          <IndexRoute component={Home} />
          <Route path={`${url_prefix}/:nameProject`} component={Project} />
          <Route path="*" component={Home} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
