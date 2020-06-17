import config from './config';
import { stringifyParams } from './helpers';

const updateState = (dispatch, action) => {
  dispatch(action);
};

const TOKEN = sessionStorage.getItem('access_token');

const getFromApi = (path, dispatch, actionData, params = {}) => {
  const url = `${config.apiUrl}${path}?${stringifyParams(params)}`;

  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: TOKEN,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((payload) => {
      const action = {
        ...actionData,
        payload,
      };
      updateState(dispatch, action);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error({ error }));
};

const sendFileToApi = (path, file) => {
  const url = `${
    config.apiUrl
  }${path}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: TOKEN,
    },
    body: file,
  });
};


const sendData = (path, data) => {
  const url = `${
    config.apiUrl
  }${path}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    body: JSON.stringify(data),
  });
};

export {
  getFromApi,
  sendFileToApi,
  sendData,
};
