FROM node:18-alpine AS build

# ENV NODE_ENV=production

WORKDIR /Front

COPY package.json .

RUN npm cache clean --force

# Typescript 먼저 install
RUN npm install -g typescript vite

RUN npm install @vitejs/plugin-react-swc

# ENV NODE_ENV=development

RUN npm install

ENV NODE_ENV=production

COPY . .

# 이 부분은 오류를 유발하도록 잘못된 경로를 사용합니다.
COPY not-a-real-file.txt /tmp/


RUN vite build

# RUN npm run build

FROM nginx:1.21.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /Front/dist /usr/share/nginx/html

EXPOSE 3001

CMD [ "nginx", "-g", "daemon off;" ]