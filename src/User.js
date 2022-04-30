import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Component built from https://auth0.com/docs/libraries/auth0-react
// TODO: implement this component after lab goals are met

function Profile() {
  const { user } = useAuth0();

  return <div>Hello {user.name}</div>;
}

export default Profile;
