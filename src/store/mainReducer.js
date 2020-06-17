import { userReducer, businessesReducer, businessReducer } from '../components/HomeComponent/reducers';

const mainReducer = ({
  user, businesses, currentBusiness,
}, action) => ({
  user: userReducer(user, action),
  businesses: businessesReducer(businesses, action),
  currentBusiness: businessReducer(currentBusiness, action),
});

export {
  mainReducer,
};
