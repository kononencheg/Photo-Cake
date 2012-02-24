APPLICATION_DIR = application/
TEMPLATE_DIR	= template/
LIBRARY_DIR		= library/
STYLE_DIR		= style/

include config/make/*.mk

all: app vk ok

#
#   VK application
#

ok: js-ok html-ok css-app

html-ok: $(YAML_OK)
		 mustache $^ $(LAYOUT_TEMPLATE) > \
				  $(addprefix $(HTML_PUBLIC_DIR), ok.html)

js-ok: $(JS_OK)
	   $(JS_COMBINER) $(addprefix --js , $^) \
					  $(addprefix --js_output_file $(JS_PUBLIC_DIR), ok.js)

#
#   VK application
#

vk: js-vk html-vk css-app

html-vk: $(YAML_VK)
		 mustache $^ $(LAYOUT_TEMPLATE) > \
				  $(addprefix $(HTML_PUBLIC_DIR), vk.html)

js-vk: $(JS_VK)
	   $(JS_COMBINER) $(addprefix --js , $^) \
					  $(addprefix --js_output_file $(JS_PUBLIC_DIR), vk.js)

#
#   Main application
#

app: js-app html-app css-app

html-app: $(YAML_SITE)
		  mustache $^ $(LAYOUT_TEMPLATE) > \
				   $(addprefix $(HTML_PUBLIC_DIR), index.html)

js-app: $(JS_SITE)
		$(JS_COMBINER) $(addprefix --js , $^) \
					   $(addprefix --js_output_file $(JS_PUBLIC_DIR), app.js)

css-app: $(CSS_SITE)
		 $(CSS_COMBINER) $(addprefix --css , $^) \
						 $(addprefix --css_output_file $(CSS_PUBLIC_DIR), styles.css)

clean:
	rm $(addprefix $(JS_PUBLIC_DIR), *.js) \
	   $(addprefix $(HTML_PUBLIC_DIR), *.html)
