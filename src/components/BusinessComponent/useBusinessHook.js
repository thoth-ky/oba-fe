import { useEffect } from 'react';
import { useStore } from '../../store/store';
import { getFromApi } from '../../utils/api';

function useBusinessHook(businessId) {
  const [state, dispatch] = useStore();
  const { currentBusiness = {}, transactionsSummary = {} } = state;

  const getBusinessDetails = () => {
    const actionData = {
      type: 'SET_CURRENT_BUSINESS',
    };
    getFromApi(`/business/${businessId}`, dispatch, actionData);
  };

  const getDashboardData = () => {
    const actionData = {
      type: 'SET_TRANSACTIONS_SUMMARY',
    };
    getFromApi(`/business/${businessId}/dashboard`, dispatch, actionData);
  };

  useEffect(() => {
    getBusinessDetails();
    getDashboardData();
  }, [businessId]);

  return {
    currentBusiness,
    transactionsSummary,
  };
}

export { useBusinessHook };
