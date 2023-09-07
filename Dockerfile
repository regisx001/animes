FROM node:16

ENV NODE_ENV development

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN rm svelte.config.js 
RUN mv node.svelte.config.js svelte.config.js

RUN rm vite.config.ts 
RUN mv node.vite.config.ts vite.config.ts 

RUN pnpm build

RUN cd build && ls

EXPOSE 3000
EXPOSE 24678