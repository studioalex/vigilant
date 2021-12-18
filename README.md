# Vigilant

The Vigilant Project is a bootstrap for monorepos with an api as backend and frontend based on Vue. The monorepo is supported by [turborepo](https://turborepo.org). 

## Content

This Turborepo includes the following packages and apps: 

**Apps**

* api: an [Fastify](https://www.fastify.io) server with [GraphQL](https://graphql.org) and [Neo4j](https://neo4j.com) [(more)](apps/api/README.md)
* admin: a [Vite](https://vitejs.dev) / [Vue](https://v3.vuejs.org) app for administration [(more)](apps/admin/README.md)
* storefront: a [Vite](https://vitejs.dev) / [Vue](https://vuejs.org) app [(more)](apps/storefront/README.md)

**Packages**

* oui: OUI (One UI) a lightweight [Vue](https://v3.vuejs.org) 3 component library [(more)](packages/oui/README.md)
* oui: Documentation of the component UI by [VitePress](https://vitepress.vuejs.org) [(UI Documentation)]()

**Utilities**

This turborepo has some additional tools already setup for you:

* [Prettier](https://prettier.io/) for code formatting
  
## Scripts

* **clean** clean up all projects from build, cache and node modules files.
* **lint** run linter on all projects
* **test** run testing on all projects
* **build** run build on all projects
* **dev** start development mode on all projects

The **development mode** start the backend api and the front ends at once.

## Technologies

Technologies used in the project.

* [turborepo](https://turborepo.org) to manage the monorepo
* [Typescript](https://www.typescriptlang.org/) for static type checking on frontend applications
* [ESLint](https://eslint.org/) for code linting
* [XO](https://github.com/xojs/xo) for linting NodeJS applications
* [Jest](https://jestjs.io/) test runner for frontend applications
* [AVA](https://github.com/avajs/ava) test runner for NodeJS applications
* [Prettier](https://prettier.io/) for code formatting
* [VitePress](https://vitepress.vuejs.org) for documentation



