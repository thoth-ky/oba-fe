
const signInUser = (dispatch, data = {}) => {
  const actionData = {
    type: 'LOGIN_USER',
    payload: data,
  };
  dispatch(actionData);
};

export {
  signInUser,
};
