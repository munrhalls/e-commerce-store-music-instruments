FROM node:20.11.1-alpine3.19 as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 80
RUN npx ng build --configuration production
RUN npx ng run e-commerce-store-musical-instruments:server

FROM node:20.11.1-alpine3.19
WORKDIR /app
COPY --from=build /app/dist/e-commerce-store-musical-instruments /app/dist/e-commerce-store-musical-instruments
CMD ["node", "dist/e-commerce-store-musical-instruments/server/main.js"]
