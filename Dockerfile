FROM node:20-alpine

# COPY package.json .
# RUN npm install aws-sdk
RUN npm install -g npm
# # RUN ng new container-test --directory ./
# # RUN npm install
# RUN apk update && apk upgrade && apk add git

# COPY npm install


# COPY . .
# EXPOSE 80

# CMD ["node", "app.js"]
# ENTRYPOINT [ "npm" ]

# FROM base as node20
WORKDIR /app







# FROM node:20-alpine AS base

# # Install dependencies only when needed
# FROM base AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app