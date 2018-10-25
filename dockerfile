######## Stage 1
FROM node:10.5.0 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN $(npm bin)/ng build --prod

######## Stage 2
FROM nginx:alpine
LABEL author="Mario Gruda"
VOLUME /var/cache/nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/nginx.conf

# docker build -t coreui-angular-starter -f dockerfile .
# docker run -d -p 8080:80 coreui-angular-starter

# docker-compose up -d --build
# docker-compose down
