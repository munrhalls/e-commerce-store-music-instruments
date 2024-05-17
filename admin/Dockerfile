FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY package*.json ./
RUN npm i
RUN npm install -g @angular/cli

COPY . .
RUN ng build


EXPOSE 80

CMD ["node", "dist/admin/server/server.mjs"]
