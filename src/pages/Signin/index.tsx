import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Razor Mustache" />

      <form>
        <h1>Sign In</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="password"
        />

        <Button type="submit">Enter</Button>

        <a href="forgot">Forgot my password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Create account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
