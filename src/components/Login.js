import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from './Auth';

class Login extends Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    fakeAuth.authenticated(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <p>You must login to view premium videos</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
