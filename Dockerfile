FROM node:15.5.1-alpine3.10

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start
