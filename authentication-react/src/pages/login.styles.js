import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const FormBox = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background: #161922;
  border-radius: 12px;
  border: 1px solid #2a2f3d;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin-bottom: 8px;
    text-align: center;
    color: #f8fafc;
    font-size: 1.5rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: #94a3b8;
    margin-top: 8px;

    a {
      color: #6366f1;
      text-decoration: none;
      font-weight: 500;
      
      &:hover { 
        text-decoration: underline; 
      }
    }
  }
`;