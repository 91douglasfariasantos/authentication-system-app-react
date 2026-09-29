import { forwardRef } from 'react';
import { Container } from './input.styles';
export const Input = forwardRef(function Input({ ...rest }, ref) {
  return (
    <Container
      ref={ref}
      {...rest}
    />
  );
});