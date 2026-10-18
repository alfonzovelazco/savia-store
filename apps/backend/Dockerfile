FROM node:22-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
COPY turbo.json ./
COPY apps/backend/package*.json ./apps/backend/
RUN npm install --legacy-peer-deps
COPY apps/backend ./apps/backend
RUN npx turbo run build --filter=@dtc/backend
RUN find /app -name ".medusa" -not -path "*/node_modules/*" 2>/dev/null || echo "NO .medusa FOUND"
EXPOSE 9000
CMD ["sh", "-c", "cd /app/apps/backend && npx medusa db:migrate && npx medusa start"]
