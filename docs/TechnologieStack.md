# Technologie Stack
 - [Frontend](#frontend)
 - [Backend](#backend)
 - [Docker](#docker)
	- [Portainer](#portainer)
	- [Nginx](#nginx)
	- [MongoDB & MongoExpress](#mongodb-and-mongoexpress)
	- [Hangfire](#hangfire)
- [Tools](#tools)
- [Npm Packages](#npm-packages)

## Frontend
The Frontend for this website is built using [Nextjs](https://nextjs.org/). Components are at ```/pages```, the whole pages at ```/pages``` and all the static/public files at ```/public/static```. All the config is in ```next.config.js``` located.

## Backend
The Backend server is [Express](https://expressjs.com/), which is handling all the ```/api``` routes and blocking requests for admin only pages.

## Docker
[Docker](https://www.docker.com/) containers are used to build a Full Stack webserver with dockerizing all services.

### Portainer
[Portainer](https://portainer.io/) is a management/administration tool the Docker enviroment. 

### Nginx
The webserver [Nginx](https://www.nginx.com/) with reverse proxy summarizes all docker container. In addition it caches static files.

### MongoDB and MongoExpress
[MongoDB](https://mongodb.com/) is the database used by the Backend and displayed by [MongoExpress](https://github.com/mongo-express/mongo-express).

### Hangfire
[Hangfire](https://www.hangfire.io/) performs background processing backed by persistent storage. It is written in Asp.net Core.

## Tools
All Node Packages installed globaly and used in this project.
 - node-minify for file minification
 - synp for converting yarn.lock and package.json files
 - readme-md-generator for the Readme

## Npm Packages
All locally installed packages in package.json
- axios and body-parser for data fetch
- compression for server data compression
- dotenv for enviroment variables
- express for the Backend server
- next, react and react-dom for the Frontend
- react-table for displaying github data
- mongoose for connecting to MongoDB
- cross-env for running scripts cross platforms
- nodemon(dev) for server restarting on change
- jsonwebtoken and next-cookies/cookie-parser for authentication user and services
- localStorage for saving/getting the Bearer token
- helmet and cors for server security
- nprogress for loading indication
- cypress for testing
- start-server-and-test combining server and testing
- dompurify, jsdom, marked and slugify for the back-end formatting of the blog api posts
- eslint, babel-eslint and eslint-plugin-react lints all js files