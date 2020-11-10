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

# npm i -g clean-css-cli uglify-es
minify:
	cleancss  -o public/static/css/nav.min.css public/static/css/nav.css
	uglifyjs --compress --mangle --output public/static/js/main.min.js -- public/static/js/main.js
	uglifyjs --compress --mangle --output public/static/js/nav.min.js -- public/static/js/nav.js

start: lint-format
	npm run build
	npm run start