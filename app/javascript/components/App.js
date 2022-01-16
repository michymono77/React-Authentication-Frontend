import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// App let you know whether the user is logged in or not
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true}).then(response =>{
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in & this.state.checkLoginStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }

    }).catch(error => {
      console.log("check login error", error);
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus:'LOGGED_IN',
      user: data.user
    })
  }

  handleLogout(){
    this.setState({
      loggedInStatus: 'Not_LOGGED_IN',
      user: {}
    })
  }

  render () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={< Home handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />} ></Route>
          <Route path="/dashboard" element={< Dashboard loggedInStatus={this.state.loggedInStatus} />} ></Route>
        </Routes>
      </Router>
    );
  }


}
