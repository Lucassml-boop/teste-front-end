<<<<<<< HEAD
# 🛍️ Vitrine de Produtos - Econverse

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite)](https://vitejs.dev/)
[![SASS](https://img.shields.io/badge/SASS-1.77.8-CC6699?logo=sass)](https://sass-lang.com/)

## 📖 Sobre o Projeto

Uma aplicação web moderna e responsiva de vitrine de produtos desenvolvida como teste técnico front-end. O projeto apresenta uma interface elegante e funcional com foco na experiência do usuário, seguindo fielmente o design fornecido no Figma.

### ✨ Principais Funcionalidades

- 🎨 **Interface Responsiva**: Layout adaptável para todos os dispositivos (mobile, tablet, desktop)
- 🛒 **Vitrine de Produtos**: Carrossel interativo com produtos da API
- 🔍 **Modal de Detalhes**: Visualização expandida dos produtos
- 🏢 **Seção de Empresas**: Carrossel de marcas parceiras
- 📱 **Design Mobile-First**: Otimizado para dispositivos móveis
- ⚡ **Performance Otimizada**: Carregamento rápido e animações suaves

## 🛠️ Stack Tecnológica

### Frontend
- **React 18.3.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.x** - Superset do JavaScript com tipagem estática
- **Vite 5.4.1** - Build tool moderna e rápida
- **SASS 1.77.8** - Pré-processador CSS

### Bibliotecas e Ferramentas
- **Swiper 11.1.11** - Carrossel/slider moderno
- **React Icons 5.3.0** - Ícones SVG como componentes React
- **React Router DOM 6.26.1** - Roteamento para SPAs
- **ESLint** - Linter para qualidade de código
- **TypeScript ESLint** - Regras específicas para TypeScript

### Arquitetura
- **Componentização** - Componentes reutilizáveis e modulares
- **CSS Modules** - Estilos encapsulados por componente
- **Responsividade** - Breakpoints e design fluido
- **API Integration** - Consumo de dados externos

## 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** (vem com Node.js) ou **yarn**
- **Git** - [Download](https://git-scm.com/)

### Verificar instalação:
```bash
node --version  # deve retornar v18.x.x ou superior
npm --version   # deve retornar 8.x.x ou superior
git --version   # deve retornar 2.x.x ou superior
```

## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/teste-front-end-econverse.git
cd teste-front-end-econverse
```

### 2️⃣ Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3️⃣ Execute em modo de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em: **http://localhost:5173**

### Comandos Detalhados

```bash
# Desenvolvimento
npm run dev          # Servidor local com hot reload (porta 5173)
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── banner/         # Banner principal
│   ├── categories/     # Seção de categorias
│   ├── companies/      # Carrossel de empresas
│   ├── footer/         # Rodapé
│   ├── header/         # Cabeçalho e navegação
│   ├── products/       # Vitrine de produtos
│   ├── showcase/       # Seção showcase
│   └── title/          # Componente de títulos
├── pages/              # Páginas da aplicação
│   └── HomePage.tsx    # Página principal
├── styles/             # Estilos globais e utilitários
│   ├── utils/          # Mixins, variáveis, breakpoints
│   ├── globals.sass    # Reset e estilos globais
│   └── styles.sass     # Arquivo principal de estilos
└── assets/             # Recursos estáticos
    └── images/         # Imagens e ícones
```

## 🎨 Metodologia CSS

### Organização
- **CSS Modules** para encapsulamento de estilos
- **SASS** para variáveis, mixins e funções
- **Mobile-First** approach para responsividade
- **BEM-like** nomenclatura para classes


## 🔗 API e Integração

### Utilizados
- **Produtos**: `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`


## 👨‍💻 Desenvolvedor

**Lucas Samuel Borges**
- 📧 Email: lucas.samuel23borges@gmail.com
- 💼 LinkedIn: [LinkedIn](https://www.linkedin.com/in/lucas-samuel-borges-b551481b8/)
- 🐙 GitHub: [GitHub](https://github.com/Lucassml-boop)

---

### 💡 Melhorias Futuras
- [ ] Implementar testes unitários (Jest/React Testing Library)
- [ ] Adicionar PWA (Progressive Web App)
- [ ] Implementar lazy loading de imagens
- [ ] Adicionar animações avançadas (Framer Motion)
- [ ] Integrar sistema de carrinho de compras
- [ ] Implementar busca e filtros de produtos
>>>>>>> 45a7da6 (Subindo projeto)
