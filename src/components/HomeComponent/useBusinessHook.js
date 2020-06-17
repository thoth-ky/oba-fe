import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { sendData, getFromApi } from '../../utils/api';
import { useStore } from '../../store/store';

function useBusinessHook() {
  const [errors, setErrors] = useState({});
  const [state, dispatch] = useStore();
  const { businesses = [], user } = state;
  const history = useHistory();

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
        history.push(`/business/${payload.id}`);
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
  }, [user]);

  return {
    submitForm,
    errors,
    businesses,
  };
}

export {
  useBusinessHook,
};
