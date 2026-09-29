import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useForm } from 'react-hook-form';
import { emailValidation, passwordValidation, } from '../validations/login.validation';
import {LoginContainer, FormBox, ErrorMessage } from './login.styles';

export function Login (){
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, } = useForm();

  function handleLogin(data) {
    console.log(data);

    alert('Login realizado com sucesso!');

    navigate('/');
  }

 return (
   <LoginContainer>
      <FormBox onSubmit={handleSubmit(handleLogin)}>
        <h2>Acesse sua conta</h2>
        
        <Input 
          type="email" 
          placeholder="E-mail" 
          {...register('email', emailValidation)}
        />

        { errors.email && (
        <ErrorMessage>
        {errors.email.message}
        </ErrorMessage>
        )}
        
        <Input 
          type="password" 
          placeholder="Senha" 
          {...register('password', passwordValidation)}
        />

        { errors.password && (
          <ErrorMessage>
          {errors.password.message}
          </ErrorMessage>
        )}
        
        <Button 
          title="Entrar" 
          type="submit" 
        />

        <p>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </FormBox>
    </LoginContainer>
  );
}