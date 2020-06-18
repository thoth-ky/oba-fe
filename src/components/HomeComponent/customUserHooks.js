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

  const handleLogin = (username, password) => {
    const data = {
      password,
      username,
    };

    sendData('/users/login', data)
      .then((response) => response.json())
      .catch((error) => console.error('Error: ', error))
      .then((payload) => {
        console.log({payload})
        if (payload && payload.token) {
          sessionStorage.setItem('access_token', `Token ${
            payload.token
          }`);
          setErrors({});
          signInUser(dispatch, payload);
          setLoggedIn(true);
          history.push('/');
        }
        setErrors((payload && payload.errors) || {});
      })
      .then(() => {
        
      });
  };

  const handleSignUp = (data) => {
    sendData('/users/', data)
      .then((response) => {
        if (response.status === 201) {
          setErrors({});
          history.push('/signin')
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
