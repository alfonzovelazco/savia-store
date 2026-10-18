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
RUN echo "LS backend:" && ls /app/apps/backend && find /app -maxdepth 6 -name "index.js" -path "*medusa*" 2>/dev/null | head -20
EXPOSE 9000
CMD ["sh", "-c", "npx medusa db:migrate && npx medusa start"]
