# FLIV Auto Vidros - Web App

Aplicação web para a rede de lojas FLIV Auto Vidros, especializada em serviços de vidros automotivos. O sistema permite que clientes encontrem a unidade mais próxima, conheçam os serviços oferecidos, solicitem orçamentos via WhatsApp e conheçam a história e diferenciais da empresa.

## Descrição

A FLIV Auto Vidros é uma empresa do grupo União Vidros Automotivos, com mais de 24 anos de experiência no mercado. O site apresenta as unidades da rede, diferenciais, depoimentos de clientes e facilita o contato para orçamento rápido e atendimento personalizado.

## Funcionalidades

- **Página inicial** com apresentação da empresa, serviços, diferenciais e chamada para ação.
- **Página de unidades**: cada loja tem uma página dedicada com informações, endereço, mapa, WhatsApp e detalhes dos serviços.
- **Solicitação de orçamento** via botão fixo do WhatsApp.
- **Depoimentos de clientes** e apresentação da equipe.
- **Design responsivo** e moderno, com animações e navegação fluida.

## Tecnologias Utilizadas

- **React 18**
- **Vite** (build e dev server)
- **React Router DOM** (roteamento)
- **Tailwind CSS** (estilização)
- **Framer Motion** (animações)
- **Radix UI** (componentes de acessibilidade)
- **Lucide React** (ícones)
- **Outras libs**: clsx, class-variance-authority

## Estrutura do Projeto

```
src/
  components/      # Componentes reutilizáveis (Header, Footer, Seções, etc)
  pages/           # Páginas principais (HomePage, StorePage)
  data/            # Dados das lojas
  lib/             # Utilitários e helpers
  index.css        # Estilos globais
  App.jsx          # Componente principal e roteamento
  main.jsx         # Ponto de entrada da aplicação
public/
  ...              # Assets públicos
```

## Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone <url-do-repo>
   cd <nome-da-pasta>
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse em** [http://localhost:5173](http://localhost:5173)

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera a build de produção
- `npm run preview` — faz preview da build

## Personalização

- Para adicionar ou editar lojas, altere o arquivo `src/data/storeData.js`.
- Para modificar textos institucionais, edite os componentes em `src/components/`.

## Licença

Este projeto é privado e de uso exclusivo da FLIV Auto Vidros. 