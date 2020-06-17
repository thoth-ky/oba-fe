
const signInUser = (dispatch, data = {}) => {
  const actionData = {
    type: 'LOGIN_USER',
    payload: data,
  };
  dispatch(actionData);
};

const updateBusinesses = (dispatch, data = []) => {
  const actionData = {
    type: 'GET_BUSINESSES',
    payload: data,
  };
  dispatch(actionData);
};

const updateCurrentBusiness = (dispatch, data = {}) => {
  const actionData = {
    type: 'SET_CURRENT_BUSINESS',
    payload: data,
  };
  dispatch(actionData);
};

export {
  signInUser,
  updateBusinesses,
  updateCurrentBusiness,
};
