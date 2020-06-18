/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isEmpty from 'is-empty';
import { Container } from '../shared/StyledComponents';
import { ErrorsComponent, FormGroup } from '../shared';
import { CustomUserHook } from './customUserHooks';


function SignUpComponent() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const {
    handleSignUp,
    errors,
    setErrors,
  } = CustomUserHook();

  const onSignUp = (e) => {
    e.preventDefault();
    if (isEmpty(password) || isEmpty(username) || isEmpty(email) || isEmpty(first_name) || isEmpty(last_name)) {
      setErrors({ signup: 'All Fields are required' });
    } else {
      const data = {
        password,
        username,
        email,
        first_name,
        last_name,
      };
      handleSignUp(data);
    }
  };
  return (
    <Container>
      <Form>
        <ErrorsComponent errors={errors} />
        <FormGroup
          label="Username"
          type="username"
          placeholder="Enter Username"
          changeHandler={setUsername}
        />

        <FormGroup
          label="First Name"
          type="text"
          placeholder="Enter First Name"
          changeHandler={setFirstName}
        />

        <FormGroup
          label="Last Name"
          type="text"
          placeholder="Enter Last Name"
          changeHandler={setLastName}
        />

        <FormGroup
          label="Email"
          type="email"
          placeholder="Enter Email"
          changeHandler={setEmail}
        />

        <FormGroup
          label="Password"
          type="password"
          placeholder="Enter Password"
          changeHandler={setPassword}
        />

        <Button variant="primary" type="submit" onClick={(e) => onSignUp(e)}>
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
