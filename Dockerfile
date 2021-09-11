# Copyright 2021 Boris Yang

# BUILD IMAGE
# FROM node:14-alpine as build-stage
# FROM python:3.9.6 as build-stage
FROM node:latest as build-stage
# FROM bayesimpact/react-base. as build-stage

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install nginx
# RUN apt update, git, ssl
# RUN apt-get update, git, ssl
# RUN zypper install git, ssl
# RUN yum install git, ssl
# RUN apt-get update && apt-get install git, yarn, ssl 

# copy files
COPY package*.json ./
COPY . .

# Install dependencies
RUN yarn

# Build
RUN yarn build

# -----------------------------------------------------------------------------

# SERVING IMAGE
FROM python:3.9.6 as deploye-stage

# Install nginx
RUN apt-get update && apt-get install -y nginx

# Copy built files
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY --from=build-stage /app/build $APP_HOME

# 修改 nginx 配置檔
COPY ./nginx_default /etc/nginx/sites-available/default

# 443 for HTTPS
EXPOSE 443

# 80 for HTTP
EXPOSE 80

# 啟動 nginx web-server
ENTRYPOINT nginx -g "daemon off;"

