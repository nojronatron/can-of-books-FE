import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About.js';
import LoginButton from './Login.js';
import LogoutButton from './Logout.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';

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
              <h1>Auth0</h1>
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
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
