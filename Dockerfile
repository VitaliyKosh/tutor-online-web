FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
