FROM node:12-alpine

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3100

CMD ["node","src/index.js"]
