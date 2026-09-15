import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { RegisterContainer, FormBox } from './register.styles';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return alert('Preencha todos os campos!');
    }

    if (password !== confirmPassword) {
      return alert('As senhas não conferem!');
    }

    console.log({ name, email, password });
    alert('Cadastro realizado com sucesso!');
    
    // Redireciona o usuário para a tela de login após cadastrar
    navigate('/');
  }

  return (
    <RegisterContainer>
      <FormBox onSubmit={handleSignUp}>
        <h2>Crie sua conta</h2>

        <Input 
          type="text" 
          placeholder="Nome completo" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />

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

        <Input 
          type="password" 
          placeholder="Confirme a senha" 
          value={confirmPassword} 
          onChange={e => setConfirmPassword(e.target.value)} 
        />

        <Button 
          title="Cadastrar" 
          type="submit" 
        />

        <p>
          Já tem uma conta? <Link to="/">Faça login</Link>
        </p>
      </FormBox>
    </RegisterContainer>
  );
}