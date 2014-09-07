jshint:=jshint --verbose

boobies:
	$(jshint) scripts/*.js

release:
	rsync -CPaz . animuchan:files/escape-js13k/

.PHONY: boobies release
