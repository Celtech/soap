FROM node:16-bullseye-slim AS base
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update \
    && apt-get install -y --no-install-recommends tini python3 make g++ \
    && rm -rf /var/lib/apt/lists/* \
    && chown -R node:node /app
USER node
COPY --chown=node:node package*.json yarn*.lock ./
RUN yarn install --frozen-lockfile --prod && yarn cache clean --force
EXPOSE 8080


FROM base AS dev
ENV NODE_ENV=development
ENV CI=1
ENV DOCKER=1
#ENV PATH=/app/node_modules/.bin:$PATH
RUN yarn install && yarn cache clean --force
CMD ["yarn", "nodemon", "./packages/api/src/main.js"]


FROM base AS builder
COPY --chown=node:node . .
RUN yarn build


FROM base AS production
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "./packages/api/src/main.js"]