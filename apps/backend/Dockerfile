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

RUN find /app -name "index.js" -path "*/.medusa/*" 2>/dev/null || echo "NO MEDUSA INDEX FOUND"

EXPOSE 9000

CMD ["sh", "-c", "npx medusa db:migrate && npx medusa start"]
