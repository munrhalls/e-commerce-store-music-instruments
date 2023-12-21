FROM node:20.10.0-alpine

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8443

CMD ["npm", "run", "start:prod"]
