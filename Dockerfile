#docker build -t github-search-frontend:latest .
#docker run -p 3000:3000 github-search-frontend

## This is a mulitstage docker build
#1. Builder container : contains all the code and dependencies
#2. Static container: contains all the static code which will be served by nginx

#STEP 1 - builder stage
FROM node:12 as github-searcher-builder
LABEL maintainer="sandeep"
LABEL product="Github-Searcher-Frontend"

#create directories
RUN mkdir frontend

# switch to frontend
WORKDIR /frontend

#clone all the code
copy ./package.json .
COPY ./Dockerfile .

#copy tsconfig settings
COPY ./tsconfig.json .
COPY ./tsconfig.paths.json .
# COPY ./yarn.lock .

#create src directory
RUN mkdir /frontend/src

#copy source
COPY ./src/ /frontend/src

#create public directory
RUN mkdir /frontend/public

#copy public files
COPY ./public/ /frontend/public

#install all the dependencies
RUN yarn install

#Run build
RUN yarn run build

#Building the multi stage github search frontend container
FROM nginx:alpine

#copy nginx configuration
COPY ./nginx.prod.conf /etc/nginx/nginx.conf

#copy compiled microapp files to static serve
COPY --from=github-searcher-builder /frontend/build /usr/share/nginx/html

#port
EXPOSE 3000

#optional start command
CMD ["nginx", "-g", "daemon off;"]