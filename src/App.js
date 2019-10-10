import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Movies from './components/Movies';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import AuthButton from './components/AuthButton';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Nav />
      </div>

      <div className="App">
        <AuthButton />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <PrivateRoute path="/protected" component={Contact} />
          <Route path="/movies/:id" component={Movies} />

          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
