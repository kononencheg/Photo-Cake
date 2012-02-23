
APPLICATION_DIR = application/
TEMPLATE_DIR	= template/
LIBRARY_DIR		= library/

include config/make/*.mk

all: all-js

html-app:
	mustache $^

all-js: js-app js-vk js-ok

js-app: $(JS_SITE)
		$(JS_COMPILER) $(JS_COMPILE_FLAGS) \
					   $(addprefix --js , $^) \
					   $(addprefix --js_output_file $(JS_PUBLIC_DIR), app.js)

js-vk: $(JS_VK)
	   $(JS_COMPILER) $(JS_COMPILE_FLAGS) \
					  $(addprefix --js , $^) \
					  $(addprefix --js_output_file $(JS_PUBLIC_DIR), vk-app.js)

js-ok: $(JS_VK)
	   $(JS_COMPILER) $(JS_COMPILE_FLAGS) \
					  $(addprefix --js , $^) \
					  $(addprefix --js_output_file $(JS_PUBLIC_DIR), ok-app.js)

clean:
	rm $(addprefix $(JS_PUBLIC_DIR), app.js vk-app.js ok-app.js)
