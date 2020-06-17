import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from '../shared/StyledComponents';
import { ErrorsComponent, FormGroup} from '../shared';
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
        <ErrorsComponent errors={errors} />
        <FormGroup
          label="Username"
          type="username"
          placeholder="Enter Username"
          changeHandler={setUsername}
        />

        <FormGroup
          label="Password"
          type="password"
          placeholder="Enter Password"
          changeHandler={setPassword}
        />

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
