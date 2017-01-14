import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';

import Project from './views/Project';
import Home from './views/Home';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App} ignoreScrollBehavior>
        <IndexRoute component={Home}/>
        <Route path="/:nameProject" component={Project}/>
        <Route path='*' component={Home} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
