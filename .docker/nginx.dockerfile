# nginx base image
FROM nginx:alpine
# copy config file
COPY ./.docker/nginx.conf /etc/nginx/nginx.conf
# expose ports
EXPOSE 80 443
# start nginx
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]