# => Build container
FROM node:16 as builder
COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-engines
COPY . .
RUN yarn build

# => Run container
FROM nginx:1.19.9-alpine

ARG BUILD_NUMBER
ENV BUILD_NUMBER ${BUILD_NUMBER}
ARG BUILD_URL
ENV BUILD_URL ${BUILD_URL}

RUN apk add --no-cache jq

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=builder /build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./loadenv.sh .
COPY .env .

# Make our shell script executable
RUN chmod +x loadenv.sh

# Start Nginx server
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/loadenv.sh && nginx -g \"daemon off;\""]