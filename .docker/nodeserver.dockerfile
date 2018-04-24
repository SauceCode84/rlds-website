# base node image
FROM node:alpine

# install nodemon
RUN npm install -g nodemon

# define working directory
WORKDIR /app
ADD ./dist/ /app/dist

# expose port 3000
EXPOSE 4300

# run node sevrer using nodemon
CMD [ "nodemon", "/app/dist/server.js" ]
