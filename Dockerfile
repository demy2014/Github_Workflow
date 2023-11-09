FROM node:14 as BUILDER 
LABEL maintainer="Demetrio Dela Rosa"

WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /app

COPY --from=BUILDER /app/ ./

EXPOSE 80

CMD [ "npm", "start" ]
