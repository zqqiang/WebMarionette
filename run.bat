watchify public\main.js -o public\bundle.js -t [ hbsfy -e html,htm ] -t [ babelify --presets [ react ] ] --debug -v  