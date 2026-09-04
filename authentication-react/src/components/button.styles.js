import styled from 'styled-components';

export const Structure = styled.button`
  width: 100%;
  padding: 14px 16px;
  background-color: #6366f1;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease;

  &:hover {
    background-color: #4f46e5;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;