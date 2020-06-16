import { useState } from 'react';

import { useStore } from '../../store/store';
import { signInUser } from './actions/HomeActions';
import config from '../../utils/config';
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

    const url = `${
      config.apiUrl
    }/users/login`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .catch((error) => console.error('Error: ', error))
      .then((payload) => {
        if (payload.token) {
          sessionStorage.setItem('access_token', `Token ${
            payload.token
          }`);
          setErrors({});
          signInUser(dispatch, payload);
          // redirect to home
        } else {
          setErrors(payload.errors);
        }
      });
  };

  const handleSignUp = (data) => {
    sendData('/users', data)
      .then((response) => response.json())
      .catch((error) => console.error('Error: ', error))
      .then((payload) => {
        console.log('redirect to dign in');
        console.log({ payload });
      });
  };

  return {
    state, handleLogin, errors, handleSignUp,
  };
};

export {
  CustomUserHook,
};
