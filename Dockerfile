FROM node:14

LABEL authors="Demetrio Dela Rosa"

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*


WORKDIR /app


COPY . .

RUN npm install -g npm-check-updates \
    ncu -u \
    npm install \
    npm install express \
    npm install babel-cli \
    npm install babel-preset \
    npm install babel-preset-env


COPY package.json ./

EXPOSE 80

CMD [ "babel-node", "app.js" ]
