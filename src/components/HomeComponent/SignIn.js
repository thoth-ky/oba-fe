import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container } from '../shared/StyledComponents';
import { ErrorsComponent, FormGroup } from '../shared';
import { CustomUserHook } from './customUserHooks';

function SignInComponent({ setLoggedIn }) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [validated, setValidated] = useState(false)
  const dummy =() =>{
    
  }
  const {
    handleLogin,
    errors,
  } = CustomUserHook(setLoggedIn);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
  
    setValidated(true);
    handleLogin(username, password)
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <ErrorsComponent errors={errors && errors.non_field_errors} />
        <FormGroup
          label="Username"
          type="username"
          placeholder="Enter Username"
          changeHandler={setUsername}
          isInvalid={!!errors.username}
          error={!!errors.username && errors.username}
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
          Submit
        </Button>
        <p>
          Don&apos;t have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </Form>
    </Container>
  );
}

export {
  SignInComponent,
};
