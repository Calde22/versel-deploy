FROM node:17.9-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN yarn install

COPY . /app 

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]