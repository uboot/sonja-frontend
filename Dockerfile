FROM node:18.7.0 as builder

WORKDIR /app

RUN npm install -g ember-cli@3.23.0

COPY . /app

RUN npm install \
  && ember build --environment production


FROM nginx:1.19.6

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/ping.json /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
