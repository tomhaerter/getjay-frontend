FROM node:10-alpine
ENV NODE_ENV=production

RUN mkdir /data/
WORKDIR /data/
COPY package.json ./
COPY yarn.lock ./
RUN NODE_ENV=development yarn install && yarn cache clean --force
ENV PATH=/data/node_modules/.bin:$PATH
COPY . ./

RUN nuxt-ts build
CMD ["nuxt-ts", "start"]
