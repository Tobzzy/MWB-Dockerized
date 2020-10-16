FROM node:14.13.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build


EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]
