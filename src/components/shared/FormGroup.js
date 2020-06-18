import React from 'react';
import Form from 'react-bootstrap/Form';

const Options = ({ choices = [], defaultChoice, changeHandler }) => (
  <Form.Control as="select" onChange={(e) => changeHandler(e.target.value)} required>
    <option value="">Select Option</option>
    {
      choices.map(({ key, value }) => (<option key={value} value={value} defaultValue={defaultChoice}>{key}</option>))
    }
  </Form.Control>
);

const FormGroup = ({
  label, type, placeholder, changeHandler, choices, as, defaultChoice, maxLength, accept,
}) => (
  <Form.Group as={as} md="4">
    <Form.Label>{label}</Form.Label>
    {
      type === 'select' ? <Options choices={choices} changeHandler={changeHandler} defaultChoice={defaultChoice} /> : (
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={(e) => changeHandler(e.target.value)}
          required
          max={maxLength}
          accept={accept}
        />
      )
    }

  </Form.Group>
);

export default FormGroup;
