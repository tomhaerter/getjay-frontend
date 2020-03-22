FROM node:10-alpine
ENV NODE_ENV=production

RUN mkdir /data/
WORKDIR /data/
COPY package.json ./
COPY yarn.lock ./
RUN yarn install && yarn cache clean --force
ENV PATH=/data/node_modules/.bin:$PATH
COPY . ./

CMD ["nuxt"]
