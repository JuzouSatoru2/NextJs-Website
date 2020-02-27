FROM node:alpine

WORKDIR /usr/app

RUN npm install -g http-server

COPY ./data ./data

EXPOSE 8082

USER node

CMD [ "http-server", "-p", "8082", "-s", "--username", "alex", "--password", "admin" ]