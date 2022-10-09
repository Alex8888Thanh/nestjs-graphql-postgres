<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest, GraphQL and PostgreSQL Logos" />
</p>

  <p align="center">CRUD using NestJS, GraphQL and PostegreSQL</p>

## Description

An application to study the Nestjs framework using Typescript.
GraphQL and PostgreSQL using TypeORM  
@class-validator for validation  
@nest/config for configuration using .env

## Installation

```bash
# clone
$ git clone https://github.com/edmilson-torres/nestjs-graphql-postgres.git

# install dependencies
$ npm install

# use your credentials
$ mv .env.example .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Docker

```bash
# start application and database
$ docker-compose up -d
```

## GraphQL Playground for requests

```bash
http://localhost:3000/graphql
```

## Requests

```bash
type UserEntity {
  id: ID!
  name: String!
  email: String!
}

type Query {
  users: [UserEntity!]!
  user(id: String!): UserEntity!
}

type Mutation {
  createUser(createUserInput: CreateUserInput!): UserEntity!
  updateUser(updateUserInput: UpdateUserInput!): UserEntity!
  removeUser(id: String!): String!
}

input CreateUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  name: String
  email: String
  id: String!
}
```
