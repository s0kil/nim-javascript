default:
	rm dist/*

	nim js --out:dist/calculator.js calculator.nim

	google-closure-compiler \
	--compilation_level=WHITESPACE_ONLY \
	--js_output_file=dist/calculator.min.js \
	--js=dist/calculator.js

release:
	rm dist/*

	nim js \
	--opt:size \
	--define:danger \
	--define:release \
	--out:dist/calculator.js \
	calculator.nim

	prepack dist/calculator.js --out dist/calculator.prepack.js

	# uglifyjs --compress --mangle -- dist/calculator.prepack.js > dist/calculator.uglify.js
	# terser --compress --mangle -- dist/calculator.prepack.js > dist/calculator.terser.js
	# babel-minify --mangle --simplify --deadcode --evaluate dist/calculator.prepack.js > dist/calculator.babel.js

	# --compilation_level=ADVANCED
	google-closure-compiler \
	--js_output_file=dist/calculator.min.js \
	--js=dist/calculator.prepack.js

	gzip --force --keep --best dist/calculator.min.js
	brotli --force --keep --best dist/calculator.min.js

server:
	nimhttpd --port:8000