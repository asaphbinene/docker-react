FROM node:alpine as builder 

WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install npm@9.8.1
COPY . .

RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=katbin-builder /app/build /usr/share/nginx/html