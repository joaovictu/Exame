# Loja de Pranchas - Backend

## Descrição
Backend simples para uma loja de pranchas, desenvolvido com TypeScript e Express, seguindo o padrão MVC.

## Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure o banco de dados PostgreSQL.
4. Execute as migrações Prisma com `npx prisma migrate dev`.
5. Inicie o servidor com `npm run dev`.

## Endpoints

### Consultar o estoque
```
curl -X GET http://localhost:3000/pranchas
```

### Cadastrar uma prancha
```
curl -X POST http://localhost:3000/pranchas \
  -H "Content-Type: application/json" \
  -d '{"quantidade": 10, "tamanhoEmPes": 6, "cor": "azul"}'
```

## Estrutura do Projeto
```
/src
  |-- controllers
  |-- models
  |-- repositories
  |-- routes
  |-- index.ts
/prisma
  |-- schema.prisma
README.md
```