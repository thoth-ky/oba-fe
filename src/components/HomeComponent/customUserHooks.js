import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import { useStore } from '../../store/store';
import { signInUser } from './actions/HomeActions';
import { sendData } from '../../utils/api';

const CustomUserHook = () => {
  const [state, dispatch] = useStore();
  const [errors, setErrors] = useState({});

  const handleLogin = (e, username, password) => {
    e.preventDefault();
    const data = {
      password,
      username,
    };

    sendData('/users/login', data)
      .then((response) => response.json())
      .catch((error) => console.error('Error: ', error))
      .then((payload) => {
        if (payload && payload.token) {
          sessionStorage.setItem('access_token', `Token ${
            payload.token
          }`);
          setErrors({});
          signInUser(dispatch, payload);
          // redirect to home
          console.log('redirect Home');
          return <Redirect to="/" from="/signin"/>;
        }
        setErrors((payload && payload.errors) || {});
      });
  };

  const handleSignUp = (data) => {
    sendData('/users/', data)
      .then((response) => {
        if (response.status === 201) {
          console.log('Redirect to Sign In');
          setErrors({});
          return <Redirect to="/signin" from='/signup'/>;
        }
        response.json().then((jsonErrors) => {
          setErrors(jsonErrors);
        });
      })
      .catch((error) => console.error('Error: ', error));
  };

  return {
    state, handleLogin, errors, handleSignUp, setErrors,
  };
};

export {
  CustomUserHook,
};
