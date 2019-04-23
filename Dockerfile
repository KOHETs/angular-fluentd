FROM node:10.12.0 as build-stage

WORKDIR /app
COPY ./client/package.json /app
COPY ./client/package-lock.json /app

RUN npm install
COPY ./client /app
ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration


FROM nginx:1.15

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
