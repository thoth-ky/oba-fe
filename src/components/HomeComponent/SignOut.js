import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function SignOutComponent() {
  useEffect(() => {
    sessionStorage.clear();
    window.location.replace('/signin');
  });
  return (
    <Redirect to="/signin" />
  );
}

export { SignOutComponent };
