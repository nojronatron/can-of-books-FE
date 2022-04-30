import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import About from './About.js';
import BestBooks from './BestBooks';
import Footer from './Footer';
import Header from './Header';
import LoginButton from './Login.js';
import LogoutButton from './Logout.js';
import Profile from './User.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <div>
                {
                  this.props.auth0.isAuthenticated
                    ? <LogoutButton />
                    : <LoginButton />
                }
                {
                  this.props.auth0.isAuthenticated
                    ? <BestBooks />
                    : <h2>Please login</h2>
                }
              </div>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
