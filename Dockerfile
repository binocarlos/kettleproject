FROM mhart/alpine-node:16 AS build-env

RUN echo "installing apk packages" && \
  apk update && \
  apk upgrade && \
  apk add \
    bash \
    git

WORKDIR /app

# root config
COPY ./*.json /app/
COPY ./yarn.lock /app/yarn.lock

# copy code
COPY ./packages /app/packages

# install modules
RUN yarn install && yarn bootstrap

# # api deploy
# FROM build-env AS deploy-api
# WORKDIR /app/packages/api
# ENTRYPOINT [ "yarn" ]
# CMD [ "serve" ]

# # frontend compile
# FROM build-env as build-frontend
# ARG APP=frontend
# RUN (cd packages/${APP} && yarn compile)

# # frontend deploy
# FROM nginx:alpine as deploy-frontend
# LABEL maintainer="kai@kaidam.ltd"
# ARG APP=frontend
# COPY ./packages/${APP}/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build-frontend /app/packages/${APP}/public /www
