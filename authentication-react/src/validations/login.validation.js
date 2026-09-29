export const emailValidation = {
    required: 'O e-mail é obrigatório.',
    pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Digite um e-mail válido.',
  },
};

export const passwordValidation = {
  required: 'A senha é obrigatória.',
  minLength: {
    value: 6,
    message: 'A senha deve ter pelo menos 6 caracteres.',
  },
};