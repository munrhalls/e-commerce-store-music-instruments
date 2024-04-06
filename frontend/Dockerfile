FROM node:20.11.1-alpine3.19

WORKDIR /

COPY package*.json ./
RUN npm i
COPY ./dist /dist

EXPOSE 80

CMD ["node", "dist/frontend/server/server.mjs"]
