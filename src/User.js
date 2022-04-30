import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Logout.js';
import LogoutButton from './Logout.js';
import { ListGroup } from 'react-bootstrap';

// Component built from https://auth0.com/docs/libraries/auth0-react

function Profile() {
  const { user } = useAuth0();
  <>
    {
      this.props.auth0.isAuthenticated
        ? <LogoutButton />
        : <LoginButton />
    }
    {
      this.props.auth0.isAuthenticated

        ? <ListGroup>
          <ListGroup.Item variant='success'>
            <h4>Welcome {user.name} !</h4>
          </ListGroup.Item>
          <ListGroup.Item variant='success'>
            <h5>{user.picture}</h5>
          </ListGroup.Item>
          <ListGroup.Item variant='success'>
            <h5>Email: {user.email}</h5>
          </ListGroup.Item>
        </ListGroup>

        : <h2>Please login</h2>
    }
  </>
}

export default Profile;
