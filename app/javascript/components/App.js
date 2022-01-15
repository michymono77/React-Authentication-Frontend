import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus:'LOGGED_IN',
      user: data.user
    })
  }

  render () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={< Home handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />} ></Route>
          <Route path="/dashboard" element={< Dashboard loggedInStatus={this.state.loggedInStatus} />} ></Route>
        </Routes>
      </Router>
    );
  }


}
