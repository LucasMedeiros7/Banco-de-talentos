# Jedi Project - Impact Platform

### Overview:
Jedi Project is a solution developed for the Impact Platform challenge, created to manage products. This project was built using Node.js and TypeScript, implementing a clean architecture and SOLID principles, unit and integration tests with Vitest, and documentation with Swagger. Additionally, it uses NodeCache for caching and Prisma as the ORM.

### [Description of challenge](https://github.com/Impact-Plataform/Banco-de-talentos/blob/main/backend/readme.md)

## Technologies:
Jedi Project is built using the following technologies:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [NodeCache](https://github.com/node-cache/node-cache)
- [Swagger](https://swagger.io/)
- [Prisma](https://www.prisma.io/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

## Requirements:
To run Jedi Project, you need to have the following requirements:
- Git installed
- Node.js v14 or later installed
- npm v6 or later installed
- A database system compatible with Prisma (SQLite)

## Running Locally
To run Jedi Project locally, follow the steps below:
```bash
# Install the dependencies:
$ npm install

# Run the database migrations:
$ npm run migrate

# Start the API server:
$ npm run dev
```
The API will be running on http://localhost:3333.

## Usage:
You can manage products through the API. For detailed documentation, check out the Swagger UI at http://localhost:3333/docs.
