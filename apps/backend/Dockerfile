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
RUN cp -r /app/apps/backend/.medusa/server /medusa-app
RUN echo "=== BUILD VERIFY ===" && ls -la /medusa-app/ && echo "index.js exists: $(test -f /medusa-app/index.js && echo YES || echo NO)"
EXPOSE 9000
CMD ["sh", "-c", "echo 'STARTING FROM /medusa-app/index.js' && cd /app/apps/backend && npx medusa db:migrate && node /medusa-app/index.js"]
