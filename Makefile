.PHONY: lint-format docker-build compose clean minify start

lint-format:
	npm run format
	npm run lint

docker-build:
	docker build -t NextJs-Website .
	docker run --publish 3000:3000 --detach --name Website NextJs-Website

compose:
	docker-compose up -d

clean:
	rm -rf node_modules
	rm -rf .next
	rm -rf out

minify:
	node-minify --compressor clean-css --input public/static/css/nav.css --output public/static/css/nav.min.css
	node-minify --compressor uglify-es --input public/static/js/main.js --output public/static/js/main.min.js
	node-minify --compressor uglify-es --input public/static/js/nav.js --output public/static/js/nav.min.js

start: lint-format
	npm run build
	npm run start