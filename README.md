# 🔐 Authentication System React

> Sistema de autenticação moderno desenvolvido com React, Vite, Styled Components e React Router, seguindo padrões rigorosos de arquitetura e estilização minimalista.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores práticas do ecossistema moderno:

* ⚛️ **React (v18)** - Biblioteca principal para construção de interfaces.
* ⚡ **Vite** - Build tool ultrarrápida para desenvolvimento.
* 🧭 **React Router DOM (v6)** - Gerenciamento de rotas e navegação.
* 💅 **Styled Components** - Estilização baseada em componentes (CSS-in-JS).
* 🎨 **Lucide React** - Biblioteca de ícones limpos e modernos.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=WHITE)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)

---

## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente na sua máquina:

1. Clone o projeto:

```bash
git clone https://github.com/91douglasfariasantos/authentication-system-app-react
```

2. Entre na pasta do projeto:

```bash
cd authentication-system-app-react
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

---

## 📐 Engenharia de Software e Padrões de Arquitetura

O projeto foi estruturado sob os preceitos de **Elite Engineering**, priorizando a manutenibilidade, a previsibilidade de estado e o desacoplamento de responsabilidades:

* 🧩 **Arquitetura Modular:** Separação estrita entre elementos visuais reutilizáveis (botões, inputs) e páginas de domínio (*Login*, *Cadastro*, *Dashboard*).

* 🛡️ **Blindagem de Dependências:** Uso avançado de `overrides` no `package.json` para garantir a integridade dos *hooks* e evitar instâncias duplicadas de bibliotecas.
  
* 🧹 **Clean Code & SOLID:** Funções e componentes enxutos baseados no Princípio da Responsabilidade Única (SRP), facilitando testes e evoluções.

---

## 🎨 Design System e Estilização (`Styled-Components`)

A identidade visual segue rigorosamente o conceito de **Design Industrial Minimalista**, focado em alta performance visual, ergonomia de uso e clareza de feedback ao usuário:

* 💻 **CSS-in-JS Dinâmico:** Injeção de temas e controle de estados visuais (`focus`, `error`, `disabled`) diretamente via *props*.
* 🌑 **Dark Mode Nativo:** Contraste profundo com tons neutros refinados e acentos luminosos para guiar ações críticas.
* 📏 **Grade Modular:** Proporções fixas que garantem fluidez e respiro visual em qualquer resolução.
  
---

## ⚡ Ícones Modernos e Ergonomia Visual (`Lucide React`)

A interface adota a biblioteca **Lucide React** para a composição dos elementos visuais e iconográficos:

* **Vetores Limpos e Escaláveis:** Ícones renderizados diretamente como componentes SVG, permitindo manipulação fluida de tamanhos, traços e cores de acordo com o estado do componente (ex: ícones de cadeado, e-mail e visibilidade de senha nos inputs).
* **Leveza de Bundle:** Importação otimizada que evita o carregamento excessivo de assets desnecessários, mantendo o build do Vite extremamente enxuto.

---

## 📋 Gerenciamento de Formulários e Validação (*React Hook Form* & *Yup/Zod*)

Para a camada de entrada de dados, o ecossistema integra ferramentas orientadas à performance e validação robusta:

* 🚀 **Alta Performance:** Uso de **React Hook Form** (componentes não controlados) para eliminar *rerenders* desnecessários a cada tecla digitada.
* 🔒 **Validação Robusta:** Esquemas tipados e estritos para e-mails, senhas e dados, bloqueando submissões inválidas antes da camada de serviço.

---

## 🎯 Conclusão

Este projeto representa uma solução robusta, escalável e alinhada às exigências do desenvolvimento front-end moderno. Ao combinar a agilidade do Vite com a previsibilidade do React, a tipagem limpa do Styled Components e uma arquitetura focada em Clean Code, a aplicação garante uma experiência de usuário (UX) fluida, segura e de altíssima performance.
