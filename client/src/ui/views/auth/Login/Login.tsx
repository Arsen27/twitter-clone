import { useState } from 'react';

import BaseInput from '../../../components/Base/Input';
import BaseButton from '../../../components/Base/Button';
import BaseLink from '../../../components/Base/Link';
import Title from '../../../components/layouts/Auth/Title';
import LayoutsAuth from '../../../layouts/Auth';
import { Container, Form, SubmitButton, SignUpLink } from './LoginStyles';

type TLoginProps = {
}

const ViewsAuthLogin = ({}: TLoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LayoutsAuth>
      <Container>
        <Title>Login</Title>
        
        <Form>
          <BaseInput
            label='Username'
            value={username}
            onChange={(newValue: string) => setUsername(newValue)}
          />

          <BaseInput
            label='Password'
            value={password}
            onChange={(newValue: string) => setPassword(newValue)}
          />

          <SubmitButton
            as={BaseButton}
          >
            Submit
          </SubmitButton>

          <SignUpLink
            as={BaseLink}
            to='/auth/signUp'
          >
            Sign Up
          </SignUpLink>
        </Form>
      </Container>
    </LayoutsAuth>
  );
};

export default ViewsAuthLogin;
