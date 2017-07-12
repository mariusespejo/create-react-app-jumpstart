import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Counter } from '../counter';
import PageNotFound from '../common/components/PageNotFound';

import logo from '../logo.svg';

import './styles/app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>create-react-app-jumpstart</h2>
          </div>

          <nav>
            <Link to="/">Home</Link>|<Link to="counter">Counter</Link>
          </nav>

          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                <p>
                  A project template for React clients. Complete with simple
                  examples of Redux patterns, routing, and testing.
                </p>}
            />
            <Route exact path="/counter" component={Counter} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
