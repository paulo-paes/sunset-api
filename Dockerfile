FROM node:20.11.0-alpine as builder

USER root

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npx tsc


FROM node:20.11.0-alpine

USER root

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY .env ./

COPY package*.json ./

RUN npm install --production --silent

EXPOSE 8000

CMD ["npm", "run", "start"]
