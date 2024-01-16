# README - Blog API

Bem-vindo à API do Blog, uma aplicação desenvolvida em **JavaScript** com o ambiente de execução **Node.js**, utilizando **PostgreSQL** como banco de dados e **Jest** para testes automatizados. Esta API foi projetada para manipular recursos de um blog, oferecendo operações **CRUD** (Create, Read, Update, Delete) através dos métodos HTTP GET, POST, PUT e DELETE.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de executar a API:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL para a aplicação.
2. Copie o conteúdo do arquivo `database.sql` e execute-o no seu banco de dados para criar as tabelas necessárias.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/IgorCastilhos/node_blog_api.git
```

2. Navegue até o diretório do projeto:

```bash
cd blog_api
```

3. Instale as dependências:

```bash
npm install
```

4. Configure as variáveis de ambiente criando um arquivo `.env` e adicionando as seguintes informações:

```env
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=seu_host
DB_PORT=sua_porta
DB_NAME=seu_banco_de_dados
ou
DB_SCHEMA=seu_schema
```

## Execução

Inicie a aplicação:

```bash
npm start
```

A API estará acessível em [http://localhost:3000](http://localhost:3000).

## Testes

Para executar os testes automatizados com Jest:

```bash
npm test
```

## Rotas e Funcionalidades

A API possui as seguintes rotas e funcionalidades:

- **GET /posts**: Retorna todos os posts.
- **GET /posts/:id**: Retorna um post específico pelo ID.
- **POST /posts**: Cria um novo post.
- **PUT /posts/:id**: Atualiza um post existente pelo ID.
- **DELETE /posts/:id**: Exclui um post existente pelo ID.

Certifique-se de consultar a documentação da API para obter informações detalhadas sobre cada rota e seus parâmetros.

## Contribuição

Se desejar contribuir com melhorias ou correções, sinta-se à vontade para criar uma issue ou enviar um pull request. Estamos abertos a colaborações!

Obrigado por escolher nossa API do Blog. Esperamos que ela atenda às suas necessidades!
