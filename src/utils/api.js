import config from './config';
import { stringifyParams } from './helpers';

const updateState = (dispatch, action) => {
  dispatch(action);
};

const TOKEN = 'dbcf83bc4312b6bc40484b1567772e5dd6094886';

const getFromApi = (path, dispatch, actionData, params = {}) => {
  const url = `${config.apiUrl}${path}?${stringifyParams(params)}`;

  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  })
    .then((response) => response.json())
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

const postToApi = (path, dispatch, actionData, data = {}) => {
  const url = `${config.apiUrl}${path}}`;

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
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


export {
  getFromApi,
  postToApi,
};
