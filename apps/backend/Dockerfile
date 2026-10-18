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
RUN echo "=== ls -la /app/apps/backend/ ===" && ls -la /app/apps/backend/ && echo "=== find .medusa ===" && find /app/apps/backend -name ".medusa" -type d 2>/dev/null && echo "=== find server dir ===" && find /app -type d -name "server" 2>/dev/null | grep -v node_modules
EXPOSE 9000
CMD ["sh", "-c", "cd /app/apps/backend && npx medusa db:migrate && node .medusa/server/index.js"]
