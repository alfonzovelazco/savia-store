FROM node:22-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
COPY turbo.json ./
COPY apps/backend/package*.json ./apps/backend/
RUN npm install --legacy-peer-deps
COPY apps/backend ./apps/backend
WORKDIR /app/apps/backend
RUN npm run build && cp -r .medusa/server /app/.medusa-server
EXPOSE 9000
CMD ["sh", "-c", "cd /app/apps/backend && npx medusa db:migrate && node /app/.medusa-server/index.js"]
