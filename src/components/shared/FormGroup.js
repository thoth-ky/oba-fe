import React from 'react'
import Form from 'react-bootstrap/Form'

const FormGroup = ({
  label, type, placeholder, changeHandler,
}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      onChange={(e) => changeHandler(e.target.value)}
      required
    />
  </Form.Group>
);

export default FormGroup;
