import React, { Component } from 'react'

export default class Registration extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log("form submitted");
    event.preventDefault();
  }

  handleChange(event) {
    console.log('handle change', event)
  }

  render () {
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
        <input type="password_confirmation" name="password_confirmation" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />
        <button type="submit">Register</button>

      </form>
    </div>)
  }
}
