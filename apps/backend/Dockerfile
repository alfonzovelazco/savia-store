FROM node:22-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
COPY turbo.json ./
COPY apps/backend/package*.json ./apps/backend/
RUN npm install --legacy-peer-deps
COPY apps/backend ./apps/backend
WORKDIR /app/apps/backend
RUN npm run build 2>&1 | tail -5
RUN find / -name "server" -path "*/.medusa/*" -not -path "*/node_modules/*" 2>/dev/null || echo "NO .medusa/server FOUND ANYWHERE"
EXPOSE 9000
CMD ["sh", "-c", "npx medusa db:migrate && npx medusa start"]
