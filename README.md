# Vigilant

The Vigilant Project is a bootstrap for monorepos with an api as backend and frontend based on Vue. The monorepo is supported by [turborepo](https://turborepo.org). 

## Content

This Turborepo includes the following packages and apps: 

**Apps**

* api: an [Fastify](https://www.fastify.io) server with [GraphQL](https://graphql.org) and [Neo4j](https://neo4j.com) [(more)](apps/api/README.md) 
* admin: a [Vite](https://vitejs.dev) / [Vue](https://v3.vuejs.org) app for administration [(more)](apps/admin/README.md)
* storefront: a [Vite](https://vitejs.dev) / [Vue](https://vuejs.org) app [(more)](apps/storefront/README.md) <a href="https://vigilant.studioalex.one"><img src="https://img.shields.io/badge/StudioAlex%20vigilant-green.svg"/></a>

**Packages**

* oui: OUI (One UI) a lightweight [Vue](https://v3.vuejs.org) 3 component library [(more)](packages/oui/README.md)
* oui: Documentation of the component UI by [VitePress](https://vitepress.vuejs.org) [(UI Documentation)]() <a href="https://oui.studioalex.one"><img src="https://img.shields.io/badge/StudioAlex%20OUI-green.svg"/></a>

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

## OUI Package a Git Submodule

To unleash the full power of a monorepo we implement the OUI package as a git submodule.
Here are the commands you need for installtion and some help to handle git submodules.

In order to add a Git submodule, use the “git submodule add” command and specify the URL of the Git remote repository to be included as a submodule.

### Add submodule

```bash
$ git submodule add <remote_url> <destination_folder>
```

### Inital pull of submodule
To pull a Git submodule, use the “git submodule update” command with the “–init” and the “–recursive” options.

```bash
$ git submodule update --init --recursive
```

### Update exiting submodule

In order to update an existing Git submodule, you need to execute the “git submodule update” with the “–remote” and the “–merge” option.

```bash
$ git submodule update --remote --merge
```

### Fetch from submodule

To fetch new commits done in the submodule repository, head into your submodule folder and run the “git fetch” command first (you will get the new submodule commits)

```bash
$ cd repository/submodule 

$ git fetch
```

Now, if you run the “git log” command again, you will be able to see the new commits you are looking to integrate.

```bash
$ git log --oneline origin/master -3

93360a2 (origin/master, origin/HEAD) Second commit
88db523 First commit
43d0813 (HEAD -> master) Initial commit
```

Now, in order for your submodule to be in-line with the newest commits, you can run the “git checkout” command and specify the SHA that you want to update your submodule to (in this case 93360a2)

```bash
$ git checkout -q 93360a2
```

### Remove Git submodules

In order to remove a Git submodule from your repository, use the “git submodule deinit” command followed by the “git rm” command and specify the name of the submodule folder.

```bash
$ git submodule deinit <submodule>

$ git rm <submodule>
```
