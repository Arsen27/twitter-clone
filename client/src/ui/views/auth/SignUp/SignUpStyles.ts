import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  font-size: 18px;
`;

export const LoginLink = styled.a`
  font-size: 17px;

  margin: 0 auto;
`;
