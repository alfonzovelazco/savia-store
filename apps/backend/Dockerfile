FROM node:22-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
COPY turbo.json ./
COPY apps/backend/package*.json ./apps/backend/

RUN npm install --legacy-peer-deps

COPY apps/backend ./apps/backend

WORKDIR /app/apps/backend
RUN npm run build

WORKDIR /app/apps/backend/.medusa/server
RUN npm install --legacy-peer-deps --omit=dev

EXPOSE 9000

CMD ["sh", "-c", "./node_modules/.bin/medusa db:migrate && ./node_modules/.bin/medusa start"]
