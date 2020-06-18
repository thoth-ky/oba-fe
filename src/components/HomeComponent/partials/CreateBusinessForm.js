import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { FormGroup } from '../../shared';

const CreateBusinessForm = ({ submitForm, errors, toggleForm }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessAbrbreviation, setBusinessAbrbreviation] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [country, setCountry] = useState('');
  const [annualSalesRevenue, setAnnualSalesRevenue] = useState('');
  const [entity, setEntity] = useState('');
  const [accountingSoftware, setAccountingSoftware] = useState('');
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }


    const data = {
      name: businessName,
      business_abbreviation: businessAbrbreviation,
      company_address: companyAddress,
      country,
      annual_sales_revenue: annualSalesRevenue,
      entity,
      accounting_software: accountingSoftware,
    };

    setValidated(true);
    submitForm(data);
  };

  const REVENUE_RANGE = [
    { value: 1, key: 'Below KeS 50,000' },
    { value: 2, key: 'KeS 50,000 - KeS 150,000' },
    { value: 3, key: 'KeS 150,000 - KeS 300,000' },
    { value: 4, key: 'KeS 300,000 - KeS 500, 000' },
    { value: 5, key: 'Above KeS 500,000' },
  ];

  const COUNTRIES = [
    { value: 'KE', key: 'Kenya' },
    { value: 'US', key: 'United States' },
    { value: 'UG', key: 'Uganda' },
    { value: 'NZ', key: 'New Zealand' },
    { value: 'TZ', key: 'Tanzania' },
  ];

  const ENTITY_CHOICES = [{ value: 'R', key: 'Retailer' }, { value: 'S', key: 'Supplier' }];

  const ACCOUNTS_SOFTWARE = [{ value: 'QB', key: 'Quickbooks' }, { value: 'EX', key: 'Excel SpreadSheets' }];
  return (
    <div>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ wisth: '100%' }}>
      <Form.Row>
        <FormGroup
          as={Col}
          label="Business Name"
          type="text"
          placeholder="Enter Enter Business Name"
          changeHandler={setBusinessName}
          isInvalid={!!errors.name}
          error={!!errors.name && errors.name}
        />
        <FormGroup
          as={Col}
          label="Business Abbr"
          type="text"
          placeholder="Enter Enter Business Abbr"
          changeHandler={setBusinessAbrbreviation}
          maxLength={5}
          isInvalid={!!errors.business_abbreviation}
          error={!!errors.business_abbreviation && errors.business_abbreviation}
        />
        <FormGroup
          as={Col}
          label="Company Address"
          type="text"
          placeholder="Enter Company Address"
          changeHandler={setCompanyAddress}
          isInvalid={!!errors.company_address}
          error={!!errors.company_address && errors.company_address}
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          as={Col}
          label="Country"
          type="select"
          choices={COUNTRIES}
          defaultChoice="KE"
          changeHandler={setCountry}
          isInvalid={!!errors.country}
          error={!!errors.country && errors.country}
        />

        <FormGroup
          choices={REVENUE_RANGE}
          as={Col}
          label="Annual Sales Revenue"
          type="select"
          placeholder="Enter annualSalesRevenue"
          changeHandler={setAnnualSalesRevenue}
          isInvalid={!!errors.annual_sales_revenue}
          error={!!errors.annual_sales_revenue && errors.annual_sales_revenue}
        />

        <FormGroup
          as={Col}
          label="Entity"
          type="select"
          choices={ENTITY_CHOICES}
          defaultChoice="R"
          placeholder="Select Entity"
          changeHandler={setEntity}
          isInvalid={!!errors.entity}
          error={!!errors.entity && errors.entity}
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          as={Col}
          label="Accounting Software"
          type="select"
          defaultChoice="QB"
          choices={ACCOUNTS_SOFTWARE}
          placeholder="Select Accounting Software"
          changeHandler={setAccountingSoftware}
          isInvalid={!!errors.accounting_software}
          error={!!errors.accounting_software && errors.accounting_software}
        />
      </Form.Row>
      <Form.Row>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col>
          <Button variant="danger" type="button" onClick={() => toggleForm(false)}>
            Cancel
          </Button>
        </Col>
      </Form.Row>
    </Form>
    </div>
  );
};

export default CreateBusinessForm;
