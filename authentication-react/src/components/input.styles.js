import styled from 'styled-components';

export const Container = styled.input`
  width: 100;
  padding: 14px 16px;
  background-color: #1e222b;
  border: 1px solid #2a2f3d;
  border-radius: 8px;
  color: #f8fafc;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &::placeholder {
    color: #64748b;
  }
`;