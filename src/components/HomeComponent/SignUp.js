/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isEmpty from 'is-empty';
import { Container } from '../shared/StyledComponents';
import { FormGroup } from '../shared';
import { CustomUserHook } from './customUserHooks';


function SignUpComponent() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [validated, setValidated] = useState(false)

  const {
    handleSignUp,
    errors,
    setErrors,
  } = CustomUserHook();

  const onSignUp = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      console.log('Invalid')
      event.stopPropagation();
    }
    console.log('Did We??')
    console.log(form.checkValidity())
    setValidated(true);
    const data = {
      password,
      username,
      email,
      first_name,
      last_name,
    };
    handleSignUp(data);
  };
  console.log({errors})
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={onSignUp}>
        <FormGroup
          label="Username"
          type="username"
          placeholder="Enter Username"
          changeHandler={setUsername}
          isInvalid={!!errors.username}
          error={!!errors.username && errors.username}
        />

        <FormGroup
          label="First Name"
          type="text"
          placeholder="Enter First Name"
          changeHandler={setFirstName}
          isInvalid={!!errors.first_name}
          error={!!errors.first_name && errors.first_name}
        />

        <FormGroup
          label="Last Name"
          type="text"
          placeholder="Enter Last Name"
          changeHandler={setLastName}
          isInvalid={!!errors.first_name}
          error={!!errors.last_name && errors.last_name}
        />

        <FormGroup
          label="Email"
          type="email"
          placeholder="Enter Email"
          changeHandler={setEmail}
          isInvalid={!!errors.email}
          error={!!errors.email && errors.email}
        />

        <FormGroup
          label="Password"
          type="password"
          placeholder="Enter Password"
          changeHandler={setPassword}
          isInvalid={!!errors.password}
          error={!!errors.password && errors.password}
        />

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p>
          Already have an account?
          <Link to="/signin"> Sign In</Link>
        </p>
      </Form>
    </Container>
  );
}

export {
  SignUpComponent,
};
