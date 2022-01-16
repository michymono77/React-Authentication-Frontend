
import React, { Component } from 'react'
import Registration from './auth/Registration';
import { useNavigate } from 'react-router-dom'
import Login from './auth/Login';
import axios from 'axios';

const Home = (props) => {

  // constructor(props) {
  //   super(props);
  //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  // };
  const navigate = useNavigate();

  const handleSuccessfulAuth = (data) => {
    // TODO: update parent component
    props.handleLogin(data);
    // redirect
      navigate('/dashboard')
  };

  const handleOnClick = () => {
    axios.delete("http://localhost:3001/logout", { withCredentials: true}).then(response => {
      props.handleLogout();
    }).catch(error => {
      console.log("logout error", error);
    })
  }

    return (
      <div>
        <h1>Home</h1>
        <h2>Stauts: {props.loggedInStatus}</h2>
        <button onClick={handleOnClick}>Logout</button>
        <Registration handleSuccessfulAuth={handleSuccessfulAuth}/>
        <Login handleSuccessfulAuth={handleSuccessfulAuth}/>
      </div>
    );
}

export default Home;
