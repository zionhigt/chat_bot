FROM node:14.20.1-alpine3.16
ENV APP_DIR=/home/node/app/
WORKDIR ${APP_DIR}
COPY . ${APP_DIR}
ENV PORT=3005
RUN apk update && apk add git && \
npm install && \
npm -g install bower && \
bower install --config.interactive=false --allow-root=true
EXPOSE ${PORT}
CMD npm run start