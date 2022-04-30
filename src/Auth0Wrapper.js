import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//  wait for SDK to init and handle errors with isLoading and error states
// source: https://auth0.com/docs/libraries/auth0-react

function Wrapper({ children }) {
  const {
    isLoading,
    error,
  } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Ooops... {error.message}</div>;
  }
  return <>{children}</>;
}

export default Wrapper;