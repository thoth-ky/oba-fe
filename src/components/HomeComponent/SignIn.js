import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from '../shared/StyledComponents';
import { CustomUserHook } from './customUserHooks';

function SignInComponent() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const {
    handleLogin,
    errors,
  } = CustomUserHook();

  return (
    <Container>
      <Form>
        <ul>
          {Object.keys(errors).map((key) => (
            <li>
              {`${key} : ${errors[key]}`}
            </li>
          ))}
        </ul>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => handleLogin(e, username, password)}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export {
  SignInComponent,
};
