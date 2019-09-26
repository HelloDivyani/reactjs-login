import React from "react";
import loginImg from "../../login.svg";
import { Grid, Form, Header, Message } from 'semantic-ui-react';
export class Login extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      username: '',
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({ error: false });

    if (!(username === 'george' && password === 'foreman')) {
      return this.setState({ error: true });
    }

    console.log("you're logged in. yay!");
    //store.set('loggedIn', true);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
  const { error } = this.state;
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">871M Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form" error={error} >
           <Header as="h1">Login</Header>
            {error && <Message
              error={error}
              content="That username/password is incorrect. Try again!"
            />}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Enter SID" onChange={this.handleChange} inline />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Enter SSO password" onChange={this.handleChange} inline />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn"  onSubmit={this.onSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
