import { useState } from 'react';

import BaseInput from '../../../components/Base/Input';
import BaseButton from '../../../components/Base/Button';
import BaseLink from '../../../components/Base/Link';
import Title from '../../../components/layouts/Auth/Title';
import LayoutsAuth from '../../../layouts/Auth';
import { Container, Form, SubmitButton, LoginLink } from './SignUpStyles';

type TSignUpProps = {
}

const ViewsAuthSignUp = ({}: TSignUpProps) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LayoutsAuth>
      <Container>
        <Title>Sign Up</Title>
        
        <Form>
          <BaseInput
            label='Email'
            value={email}
            onChange={(newValue: string) => setEmail(newValue)}
          />

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
            Sign Up
          </SubmitButton>

          <LoginLink
            as={BaseLink}
            to='/auth/login'
          >
            Login
          </LoginLink>
        </Form>
      </Container>
    </LayoutsAuth>
  );
};

export default ViewsAuthSignUp;
