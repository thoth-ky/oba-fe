/* eslint-disable no-console */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useStore } from '../../store/store';
import { signInUser } from './actions/HomeActions';
import { sendData } from '../../utils/api';

const CustomUserHook = (setLoggedIn) => {
  const [state, dispatch] = useStore();
  const [errors, setErrors] = useState({});
  const history = useHistory();

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
        }
        setErrors((payload && payload.errors) || {});
      })
      .then(() => {
        setLoggedIn(true);
        history.push('/');
      });
  };

  const handleSignUp = (data) => {
    sendData('/users/', data)
      .then((response) => {
        if (response.status === 201) {
          setErrors({});
        }
        response.json().then((jsonErrors) => {
          setErrors(jsonErrors);
        });
      })
      .then(() => history.push('/signin'))
      .catch((error) => console.error('Error: ', error));
  };

  return {
    state, handleLogin, errors, handleSignUp, setErrors,
  };
};

export {
  CustomUserHook,
};
