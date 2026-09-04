import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import {LoginContainer, FormBox } from './login.styles';

export function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(e) {
    e.preventDefault();
    console.log({ email, password });
    alert('Login feito!');
  }
 
 return (

   <LoginContainer>
      <FormBox onSubmit={handleSignIn}>
        <h2>Acesse sua conta</h2>
        
        <Input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        
        <Input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        
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