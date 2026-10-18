FROM node:22-alpine

WORKDIR /app

# Copy root monorepo manifests
COPY package*.json ./
COPY turbo.json ./

# Copy storefront manifests
COPY apps/storefront/package*.json ./apps/storefront/

# Install all dependencies
RUN npm install --legacy-peer-deps

# Copy storefront source
COPY apps/storefront ./apps/storefront

# Build the storefront
WORKDIR /app/apps/storefront
RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start"]
