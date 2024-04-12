FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY package*.json ./
RUN npm i
RUN npm install -g @angular/cli @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations

COPY . .
RUN ng build
RUN npx graphql-codegen --config GQL_types.yml

EXPOSE 80

CMD sh -c 'npx graphql-codegen --config GQL_types.yml && node dist/frontend/server/server.mjs'
