import React, { useState } from 'react';
import { ButtonComponent } from '../shared';
import { useBusinessHook } from './useBusinessHook';
import CreateBusinessForm from './partials/CreateBusinessForm';
import BusinessList from './partials/ListBusinesses';

function HomeComponent() {
  const [showForm, toggleForm] = useState(false);

  const { submitForm, errors, businesses } = useBusinessHook();

  return (
    <div>
      <ButtonComponent
        size="lg"
        buttonType="primary"
        onClickEvent={(e) => toggleForm(!showForm)}
        message="Register New Business"
        name="register_business"
      />
      {showForm && (
      <CreateBusinessForm
        submitForm={submitForm}
        errors={errors}
        toggleForm={toggleForm}
      />
      )}
      {!showForm && businesses && <BusinessList businesses={businesses} />}
    </div>
  );
}

export { HomeComponent };
