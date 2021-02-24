FROM node:15.5.1-alpine3.10
WORKDIR /app
COPY . .
RUN npm install -g nodemon
RUN npm install
CMD npm run dev
