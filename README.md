# Teste Econverse — Implementação

Este repositório contém a implementação do teste de Front‑End da Econverse.

## Stack
- React 19 + TypeScript
- Vite
- Sass (CSS Modules)
- Swiper (carrossel)
- react-icons
- react-router-dom

## Como rodar

Pré‑requisitos
- Node.js 18+ e npm

Instalação e desenvolvimento
```bash
npm install
npm run dev
```

Build e preview
```bash
npm run build
npm run preview
```

Lint
```bash
npm run lint
```

Endpoint do JSON de produtos (fonte do teste):
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

## Principais componentes
- `src/components/header/` — Cabeçalho
- `src/components/banner/` — Hero com CTA
- `src/components/categories/` — Categorias (ícones via imports dinâmicos)
- `src/components/products/` — Lista + Slider de produtos e modal
	- `Slider.tsx` — Carrossel com Swiper
- `src/components/showcase/` — Modal de produto
- `src/components/companions/` — Parceiros
- `src/components/companies/` — Marcas
- `src/components/footer/` — Rodapé

## Estilos
- Fonte padrão: Poppins (carregada em `index.html`)
- Variável CSS: `--font-poppins` definida em `src/utils/styles/globals.sass`
- Estilos globais e utilitários em `src/utils/styles/`

## Observações
- O proxy do Vite é apenas para desenvolvimento. Em produção, ajuste a origem dos dados conforme necessidade (backend/proxy próprio ou arquivo local em `public`).
