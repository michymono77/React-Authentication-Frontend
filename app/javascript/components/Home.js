
import React, { Component } from 'react'
import Registration from './auth/Registration';
import { useNavigate } from 'react-router-dom'

const Home = (props) => {

  // constructor(props) {
  //   super(props);
  //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  // };
  const navigate = useNavigate();

  const handleSuccessfulAuth = (data) => {
    // TODO: update parent component
      navigate('/dashboard') // redirect
  };

    return (
      <div>
        <h1>Home</h1>
        <h1>Stauts: {props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth={handleSuccessfulAuth}/>
      </div>
    );
}

export default Home;
