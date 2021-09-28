FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm -g install @nestjs/cli
RUN npm install --production=true

RUN apt-get -q update && apt-get install netcat

COPY . .

RUN npm build

CMD ["sh", "-c", "npx typeorm migration:run && npm start:prod"]