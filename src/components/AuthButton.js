import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from './Auth';

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome to see premium videos{' '}
      <button
        onClick={() => {
          fakeAuth.signOut(() => history.push('/'));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not Log In To See the Premium Videos</p>
  )
);

export default AuthButton;
