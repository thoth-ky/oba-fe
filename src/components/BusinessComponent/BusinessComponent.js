import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useBusinessHook } from './useBusinessHook';

function BusinessComponent({ match }) {

  const { params: { id: businessId } } = match;

  const {
    currentBusiness,
    transactionsSummary,
  } = useBusinessHook(businessId);

  return (
    <div>
      <Button
        variant="primary"
        as={Link}
        to={{
          pathname: `/business/${businessId}/upload`,
          businessId,
        }}
      >
        Upload Template
      </Button>

      Business
      {' '}
      { businessId }
      Coming Soon
    </div>
  );
}

export { BusinessComponent };
