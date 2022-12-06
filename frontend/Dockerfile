FROM node:16.15.1

WORKDIR /app

COPY package.json ./

COPY ./ ./

RUN yarn

CMD ["yarn", "start"]