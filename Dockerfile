FROM node:16.13.2-alpine

ENV NODE_ENV $NODE_ENV

WORKDIR /app
COPY package.json /app 
COPY .env /app

RUN npm install
RUN npm install typescript -g
COPY . /app

CMD ["npm", "start"]
