FROM node:22-alpine

WORKDIR /app

ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL
ARG NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
ARG NEXT_PUBLIC_BASE_URL

ENV NEXT_PUBLIC_MEDUSA_BACKEND_URL=$NEXT_PUBLIC_MEDUSA_BACKEND_URL
ENV NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=$NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

COPY package*.json ./
COPY turbo.json ./
COPY apps/storefront/package*.json ./apps/storefront/

RUN npm install --legacy-peer-deps

COPY apps/storefront ./apps/storefront

WORKDIR /app/apps/storefront
RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start"]
