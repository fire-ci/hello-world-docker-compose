FROM node

ARG CACHE_DATE

RUN mkdir -p ~/app
ADD . ~/app
WORKDIR ~/app

RUN yarn
# RUN yarn start
CMD yarn start