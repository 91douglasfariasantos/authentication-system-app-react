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

* 🧩 **Arquitetura Baseada em Componentes:** A divisão de responsabilidades separa claramente componentes visuais pura e simplesmente reutilizáveis (como botões e inputs parametrizados) das páginas de domínio (Login, Cadastro e Dashboard).
* 🛡️ **Consistência de Dependências e Prevenção de Regressões:** O gerenciamento do ambiente utiliza regras estritas de resolução via `package.json` (`overrides`), garantindo a integridade do ciclo de vida dos hooks do React e blindando a árvore de renderização contra instâncias duplicadas de bibliotecas de terceiros (como o ecossistema do `styled-components` e `react-router-dom`).
* 🧹 **Clean Code & SOLID:** Componentes e funções utilitárias são mantidos enxutos, aplicando o princípio da responsabilidade única (SRP), facilitando testes unitários futuros e manutenções evolutivas.

---

## 🎨 Design System e Estilização (`Styled-Components`)

A identidade visual segue rigorosamente o conceito de **Design Industrial Minimalista**, focado em alta performance visual, ergonomia de uso e clareza de feedback ao usuário:

* 💻 **CSS-in-JS Dinâmico:** Utilização avançada de `styled-components` para injeção de temas, gerenciamento de estados visuais (como *focus*, *error* e *disabled* direto nas propriedades dos componentes) e estilização baseada em props.
* 🌑 **Escala Cromática Controlada:** Uso estratégico de contrastes profundos em modo escuro (*dark mode* nativo), complementados por tons neutros refinados e acentos luminosos direcionados para guiar o foco do usuário nas ações críticas (como o botão de submissão do formulário).
* 📏 **Consistência Tipográfica e Espaçamentos:** Grade modular baseada em proporções fixas, garantindo fluidez e respiro visual em diferentes resoluções de tela.

---

## ⚡ Ícones Modernos e Ergonomia Visual (`Lucide React`)

A interface adota a biblioteca **Lucide React** para a composição dos elementos visuais e iconográficos:

* **Vetores Limpos e Escaláveis:** Ícones renderizados diretamente como componentes SVG, permitindo manipulação fluida de tamanhos, traços e cores de acordo com o estado do componente (ex: ícones de cadeado, e-mail e visibilidade de senha nos inputs).
* **Leveza de Bundle:** Importação otimizada que evita o carregamento excessivo de assets desnecessários, mantendo o build do Vite extremamente enxuto.

---

## 📋 Gerenciamento de Formulários e Validação (*React Hook Form* & *Yup/Zod*)

Para a camada de entrada de dados, o ecossistema integra ferramentas orientadas à performance e validação robusta:

* 🚀 **Alta Performance sem Rerenders Desnecessários:** O uso de **React Hook Form** gerencia o estado dos formulários de forma não controlada (*uncontrolled components*), evitando renderizações desnecessárias da árvore de componentes a cada tecla digitada pelo usuário.
* 🔒 **Validação Declarativa e Tipada:** Regras de validação estritas para e-mails corporativos/pessoais, complexidade de senhas e confirmação de dados, integrando esquemas de validação previsíveis para barrar submissões inválidas antes mesmo de atingirem a camada de serviço.
