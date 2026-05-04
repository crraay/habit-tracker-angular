# Build stage
FROM node:20-bookworm AS build
# Exit 137 during `ng build` on small VPS = Linux OOM killer. Cap JS heap so Node does not grab all RAM.
# On 1GB droplets, add swap (see backend DOCKER.md) and/or pass --build-arg NODE_MEMORY_LIMIT=768
ARG NODE_MEMORY_LIMIT=1536
ENV NODE_OPTIONS=--max-old-space-size=${NODE_MEMORY_LIMIT}
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

# Serve static files with nginx
FROM nginx:1.27-alpine
COPY --from=build /app/dist/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ || exit 1
