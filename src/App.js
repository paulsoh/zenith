import React, { Component } from 'react';
import MainPage from './Pages/MainPage';
import {
  Router,
  Route,
} from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route
            exact
            path="/"
            component={MainPage}
          />
          <Route
            path="/signup"
            component={RegisterPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
