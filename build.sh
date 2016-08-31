#!/bin/bash
browserify -t [ babelify --presets [ react ] ] src/app.js -o src/bundle-app.js