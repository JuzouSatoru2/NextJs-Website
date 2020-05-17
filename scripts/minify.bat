@ECHO OFF
cd ../public/static/css
node-minify --compressor clean-css --input nav.css --output nav.min.css && node-minify --compressor clean-css --input style.css --output style.min.css && cd ../js && node-minify --compressor uglify-es --input main.js --output main.min.js && node-minify --compressor uglify-es --input nav.js --output nav.min.js && cd ../../../ && echo Everything Done!