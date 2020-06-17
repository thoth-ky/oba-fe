
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...action.payload };

    default:
      return state;
  }
};


const businessesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BUSINESSES':
      console.log({state}, {action})
      return action.payload;

    default:
      return state;
  }
};

const businessReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_BUSINESS':
      return { ...action.payload };

    default:
      return state;
  }
};

export {
  userReducer,
  businessesReducer,
  businessReducer,
};
