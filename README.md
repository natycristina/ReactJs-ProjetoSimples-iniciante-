# 🚀 Aprendizado e Treinamento em React

Este repositório contém **dois pequenos projetos** desenvolvidos com o objetivo de treinar conceitos fundamentais do **React**.  
O foco foi entender desde a criação de componentes até a navegação entre páginas usando **React Router**.

---

## 📂 Estrutura do Repositório

ReactJs/
│
├── projeto1/ # Componentes, props, estado e eventos
└── projeto2/ # Navegação entre páginas com React Router


---

## 📌 Projeto 1 — Introdução a Componentes, Props e Estado

**Objetivo:**  
Aprender como criar e utilizar componentes, passar **props**, manipular **estado (`useState`)** e responder a eventos (como cliques de botão e digitação em inputs).

**Principais conceitos treinados:**
- Criação de componentes React (`function App`, `function Titulo`)
- Uso de **props** para personalizar componentes (`cor`, `nome`, `paragrafo`)
- Uso do **hook `useState`** para gerenciar estado interno
- Manipulação de eventos (`onClick`, `onChange`)
- Renderização condicional com operador ternário (`? :`)
- Estilização inline (`style={{color: cor}}`)
- Exibição de imagens a partir de URL

**Exemplo do projeto:**

<Titulo cor="red" nome="Nataly Cristina" paragrafo={true} />
<Titulo cor="purple" />


---

## 📌 Projeto 2 — Navegação com React Router

**Objetivo:**  
Aprender a criar múltiplas páginas em uma aplicação React usando React Router DOM para navegação sem recarregar a página.

**Principais conceitos treinados:**
- Uso do React Router DOM (BrowserRouter, Routes, Route)
- Criação de páginas (Home, Sobre, Contato)
- Componente de navegação (Menu) com links para diferentes rotas
- Estruturação de rotas no componente App
- Navegação sem refresh de página

**Exemplo das rotas:**
<Route path="/" element={<Home />} />
<Route path="/Sobre" element={<Sobre />} />
<Route path="/Contato" element={<Contato />} />

## 🛠 Tecnologias Utilizadas

- **React** (componentes, props, hooks)
- **React Router DOM** (navegação entre páginas)
- **JavaScript ES6+**
- **HTML5 / CSS3**
- **Vite** (ferramenta de build e desenvolvimento rápido)

---

## ▶️ Como Criar e Rodar os Projetos

### 1️⃣ Pré-requisitos
Certifique-se de ter o Node.js e npm instalados:

```bash
node -v
# v22.13.1

npm -v
# 10.9.2

### 2️⃣ Clonar o Repositório

```bash
git clone https://github.com/natycristina/ReactJs-ProjetoSimples-iniciante-.git
cd ReactJs-ProjetoSimples-iniciante-

### 3️⃣ Rodar o Projeto 1

```bash
cd projeto1
npm install
npm run dev

### 4️⃣ Rodar o Projeto 2

```bash
cd ../projeto2
npm install
npm install react-router-dom
npm run dev
nginx

