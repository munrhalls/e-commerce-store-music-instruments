Live: https://sang-logium.com
TODO
SERVER
/config
/utils
/@types
/schemas
/fragments
/operations
/resolvers
/data-sources

FRONT UI
/environment
/assets
/generated.ts (graphql types based on gql server from codegen.yml)
/graphql
/models (any TS types that aren't generated via gql codegen tool)
/services (they handle all CRUD stuff, funneling data-server powering to ui)
/components
/pages

TODO AFTER DEV:

- npm ci --only=production, prod dockerfiles
- Frontend dockerfile: npm i -> npm ci
- prune all docker volumes on prod droplet pc -> then leave only db volume
- optimize https/cloudflare -> flexible mode -> full

UNDERSTAND OF HOW TO DEVELOP THIS APP:

A) DEVELOP LOCALLY _OUTSIDE_ CONTAINERS

- first, run the graphql server - generating gql types via mercurious-codegen on frontend needs running gql server
- then run the frontend angular ui npm scripts (watch & serve:ssr:frontend)

B) USE LOCAL DOCKER COMPOSE (local.yaml), TEST CHANGES IN CONTAINERS NETWORK

- any type errors (including GQL types) will stop the build
- but you have no type checks at runtime inside containers (code's transpiled after built)

C) USE DEPLOY SCRIPT

- handles logins, permissions
- pushes to dockerhub, pulls at droplet pc, runs prod compose

Large-scale, fullstack fictional e-commerce store application for my portfolio.

- GraphQL querying for server-client request-response cycle,
- Angular Frontend,
- Backend with MongoDB/Mongoose for database, Node.js runtime,
  Fastify + Typescript for server, and GraphQL for server-client

BACKEND:

- Backend tests: <...>
- MongoDB, Mongoose for database & querying
- Fastify for server (framework similar to express but much faster, more modern, with decent typescript support, simply better)
- Node.js for server runtime (single threaded, event-loop based, faster than multi-threaded runtime's)

<!-- test -->

FRONTEND:

- Frontend tests: Karma/Jasmine (Angular, built-in's)
- Angular, with module splitting, lazy-loading and Angular routing

Features:

- RWD covers all device sizes

# E-commerce Store Music Instruments

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

/Test tagging/
