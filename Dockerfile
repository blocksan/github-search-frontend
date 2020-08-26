#docker build -t github-search-frontend:latest .
#docker run -p 3000:3000 github-search-frontend

## This is a mulitstage docker build
#1. Builder container : contains all the code and dependencies
#2. Static container: contains all the static code which will be served by nginx

#STEP 1 - builder stage
FROM node:12 as github-searcher-build
LABEL maintainer="sandeep"
LABEL product="Github-Searcher-Frontend"

#arguments
ARG RUNTIME_PORT=3000

#variables
ENV FRONTEND=frontend

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

RUN ls

#Run build
RUN yarn run build

# #STEP 2 - compression
# FROM adhityan/zopfli:latest as compressor

# #create directories
# RUN mkdir /compressed
# WORKDIR /compressed

# #variables
# ENV FRONTEND=consumer

# #copy compiled react files to static serve
# COPY --from=builder /code/frontend/${FRONTEND}/build /compressed

# #Run compress and delete
# RUN find ./ -type f -name '*.css' -print0 -o -name '*.csv' -print0 -o -name '*.html' -print0 -o -name '*.htm' -print0 -o -name '*.js' -print0 -o -name '*.svg' -print0 -o -name '*.txt' -print0 -o -name '*.xml' -print0 -o -name '*.json' -print0 -o -name '*.ico' -print0 | xargs -0 zopfli --i5;
# RUN find ./ -type f -name '*.css' -print0 -o -name '*.csv' -print0 -o -name '*.html' -print0 -o -name '*.htm' -print0 -o -name '*.js' -print0 -o -name '*.svg' -print0 -o -name '*.txt' -print0 -o -name '*.xml' -print0 -o -name '*.json' -print0 -o -name '*.ico' -print0 | xargs -0 rm;


#Building the multi stage microapp container
FROM nginx:alpine

#copy nginx configuration
COPY ./nginx.prod.conf /etc/nginx/nginx.conf

#copy compiled microapp files to static serve
COPY --from=github-searcher-build /frontend/build /usr/share/nginx/html

#port
EXPOSE 3000

#optional start command
CMD ["nginx", "-g", "daemon off;"]