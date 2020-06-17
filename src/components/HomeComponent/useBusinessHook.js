import { useState, useEffect } from 'react';
import { sendData, getFromApi } from '../../utils/api';
import { useStore } from '../../store/store';
import { updateBusinesses, updateCurrentBusiness } from './actions/HomeActions';

function useBusinessHook() {
  const [errors, setErrors] = useState({});
  const [state, dispatch] = useStore();
  const { businesses = [], currentBusiness = {} } = state;

  const submitForm = (data) => {
    sendData('/business/', data)
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        response.json().then((jsonErrors) => {
          setErrors(jsonErrors);
        });
      })
      .then((payload) => {
        updateCurrentBusiness(dispatch, payload);
      });
  };

  const getAllBusinesses = () => {
    const actionData = {
      type: 'GET_BUSINESSES',
    };

    getFromApi('/business/', dispatch, actionData);
  };

  useEffect(() => {
    getAllBusinesses();
  }, []);
  console.log(state);
  return {
    submitForm,
    errors,
    businesses,
  };
}


export {
  useBusinessHook,
};
