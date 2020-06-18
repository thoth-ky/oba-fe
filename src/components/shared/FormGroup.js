import React from 'react';
import Form from 'react-bootstrap/Form';

const Options = ({ choices = [], defaultChoice, changeHandler, isInvalid }) => (
  <Form.Control as="select" onChange={(e) => changeHandler(e.target.value)} isInvalid required>
    <option value="">Select Option</option>
    {
      choices.map(({ key, value }) => (<option key={value} value={value} defaultValue={defaultChoice}>{key}</option>))
    }
  </Form.Control>
);

const FormGroup = ({
  label, type, placeholder, changeHandler, choices, as, defaultChoice, maxLength, accept, isInvalid, error
}) => (
  <Form.Group as={as} md="4">
    <Form.Label>{label}</Form.Label>
    {
      type === 'select' ? <Options choices={choices} changeHandler={changeHandler} defaultChoice={defaultChoice} isInvalid={isInvalid} /> : (
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={(e) => changeHandler(e.target.value)}
          required
          max={maxLength}
          accept={accept}
          isInvalid={isInvalid}
        />
      )
    }
    <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
  </Form.Group>
);

export default FormGroup;
