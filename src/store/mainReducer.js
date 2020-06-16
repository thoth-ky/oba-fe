import { userReducer } from '../components/HomeComponent/reducers';

const mainReducer = ({
  user,
}, action) => ({
  user: userReducer(user, action),
});

export {
  mainReducer,
};
