import { userReducer, businessesReducer, businessReducer } from '../components/HomeComponent/reducers';
import { summaryReducer } from '../components/BusinessComponent/reducers';

const mainReducer = ({
  user, businesses, currentBusiness, transactionsSummary,
}, action) => ({
  user: userReducer(user, action),
  businesses: businessesReducer(businesses, action),
  currentBusiness: businessReducer(currentBusiness, action),
  transactionsSummary: summaryReducer(transactionsSummary, action),
});

export {
  mainReducer,
};
