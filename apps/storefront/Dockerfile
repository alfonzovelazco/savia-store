FROM node:22-alpine

WORKDIR /app

ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://medusa-admin.i8knmp.easypanel.host
ARG NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_442a20f248d7d001c392d7739a05e4d3ab4b90453830c08a1ba92752e81c4387
ARG NEXT_PUBLIC_BASE_URL=https://savia-storefront.i8knmp.easypanel.host

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
