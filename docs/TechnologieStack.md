# Technologie Stack
 - [Frontend](#frontend)
 - [Backend](#backend)
 - [Docker](#docker)
	- [Portainer](#portainer)
	- [Nginx](#nginx)
	- [MongoDB & MongoExpress](#mongo)
- [Tools ](#tools)
- [Npm Packages](#npm)

## Frontend <a name=#frontend></a>
The Frontend for this website is built using [Nextjs](https://nextjs.org/). Components are at ```/pages```, the whole pages at ```/pages``` and all the static/public files at ```/public/static```. All the config is in ```next.config.js``` located.

## Backend <a name=#backend></a>
The Backend server is [Express](https://expressjs.com/), which is handling all the ```/api``` routes and blocking requests for admin only pages.

## Docker <a name=#docker></a>
[Docker](https://www.docker.com/) containers are used to build a Full Stack webserver. All containers are used with docker-compose. 

### Portainer <a name=#portainer></a>
[Portainer](http://portainer.io/) is a management/administration tool the Docker enviroment. 

### Nginx <a name=#nginx></a>
The webserver [Nginx](https://www.nginx.com/) with reverse proxy summarizes all docker container. In addition it caches static files.

### MongoDB & MongoExpress <a name=#mongo></a>
[MongoDB](http://mongodb.com/) is the database used by the Backend and displayed by [MongoExpress](https://github.com/mongo-express/mongo-express).

## Tools <a name=#tools></a>
All Node Packages installed globaly and used in this project.
 - node-minify for file minification
 - synp for converting yarn.lock and package.json files
 - readme-md-generator for the Readme

## Npm Packages <a name=#npm></a>
All locally installed packages in package.json
- axios for data fetch
- compression for server data compression
- dotenv for enviroment variables
- express for the Backend server
- next, react and react-dom for the Frontend
- react-table for displaying github data