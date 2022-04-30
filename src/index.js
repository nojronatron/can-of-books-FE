import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App.js';

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={ AUTH0_DOMAIN }
    clientId={ AUTH0_CLIENT_ID }
    redirectUri={ window.location.origin }
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
