# FROM node:16

# ENV NODE_ENV development

# RUN npm install -g pnpm

# WORKDIR /app

# COPY package.json pnpm-lock.yaml ./

# RUN pnpm install --frozen-lockfile

# COPY . .

# RUN pnpm build

# RUN cd build && ls

FROM nginx:1.19-alpine

COPY  ./build /usr/share/nginx/html
