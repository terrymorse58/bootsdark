#!/usr/bin/env bash

echo "Building minified css files:"
cp -v bootsdark.css bootsdark.min.css
gulp --gulpfile gulpfile.js
cp -v bootsdark.css dist
mv -v bootsdark.min.css dist
echo "Minify complete."
echo " "
echo "Build complete."
