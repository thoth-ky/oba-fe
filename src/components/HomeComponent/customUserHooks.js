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
      .then((response) =>{
        response.json()
        .then((payload)=> {
          if (payload && payload.token) {
            sessionStorage.setItem('access_token', `Token ${
              payload.token
            }`);
            setErrors({});
            signInUser(dispatch, payload);
            setLoggedIn(true);
            window.location.replace('/')
          }
          setErrors((payload && payload.errors) || {});
        })
      })
      .catch((error) => console.error('Error: ', error));
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
