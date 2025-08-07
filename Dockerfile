FROM node:lts AS build

ARG VITE_ALGOLIA_API_KEY
ARG VITE_ALGOLIA_APP_ID
ARG VITE_ALGOLIA_INDEX_NAME

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime

COPY ./prod/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
